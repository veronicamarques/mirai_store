import prisma from "../prisma/client";
import { createPasswordHash } from "../services/hash";
import crypto from "crypto";
import { sendEmail } from "../services/nodemailer";
import "dotenv/config";

class usersController {
  async index(req, res) {
    try {
      const allUsers = await prisma.users.findMany();
      return res.status(200).json(allUsers);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async create(req, res) {
    try {
      const user = await prisma.users.findUnique({
        where: {
          email: req.body.email,
        },
      });

      if (user) {
        return res.status(422).json({ error: "Este endereço de email já existe." });
      }

      const encryptedPassword = await createPasswordHash(req.body.password);

      const newUser = await prisma.users.create({
        data: {
          name: req.body.name,
          email: req.body.email,
          password: encryptedPassword,
          active: false,
        },
      });

      if (!newUser) return res.status(422).json({ error: "Falha ao cadastrar usuário." });

      const tokenID = crypto.randomBytes(16).toString("hex");

      const newToken = await prisma.token.create({
        data: {
          number: tokenID,
          userid: newUser.id,
          type: 1,
        },
      });

      if (!newToken) return res.status(422).json({ error: "Falha ao cadastrar usuário." });

      sendEmail(
        req.body.email,
        "Verificação da Conta",
        "Olá " +
          req.body.name +
          ",\n\n" +
          "Porfavor verifique sua conta clicando no link: \n" +
          process.env.HOST_URL +
          "/email-confirm/" +
          tokenID +
          "\n\nObrigado!\n"
      );

      return res.status(200).json();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, email, password, active } = req.body;

      const user = await prisma.users.findUnique({
        where: {
          id,
        },
      });

      if (!user) return res.status(422).json();

      const encryptedPassword = await createPasswordHash(password);

      const updateUser = await prisma.users.update({
        where: {
          id,
        },
        data: {
          name,
          email,
          password: encryptedPassword,
          active,
        },
      });

      if (!updateUser) return res.status(422).json();

      return res.status(200).json();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;

      const user = await prisma.users.findUnique({
        where: {
          id,
        },
      });

      if (!user) return res.status(422).json();

      const deleteUser = await prisma.users.delete({
        where: {
          id,
        },
      });

      if (!deleteUser) return res.status(422).json();

      return res.status(200).json();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async confirm_email(req, res) {
    try {
      const token = req.params.token;

      const dbToken = await prisma.token.findUnique({
        where: {
          number: String(token),
        },
      });

      if (!dbToken) return res.status(422).json({ error: "Autorização expirada." });

      const user = await prisma.users.findUnique({
        where: {
          id: dbToken.userid,
        },
      });

      if (!user) return res.status(422).json({ error: "Esse email já foi confirmado." });

      const email = user.email;

      await prisma.token.delete({
        where: {
          number: token,
        },
      });

      await prisma.users.update({
        where: {
          email,
        },
        data: {
          active: true,
        },
      });

      return res.status(200).json();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async password_reset(req, res) {
    try {
      const { email } = req.params;

      const user = await prisma.users.findUnique({
        where: {
          email,
        },
      });

      if (!user) return res.status(422).json({ error: "Esse email não existe." });

      const dbToken = await prisma.token.findMany({
        where: {
          userid: user.id,
          type: 2,
        },
      });

      if (dbToken.length > 0) return res.status(422).json({ error: "Um email já foi enviado." });

      await prisma.token.deleteMany({
        where: {
          userid: user.id,
          type: 2,
        },
      });

      const tokenID = crypto.randomBytes(16).toString("hex");

      const newToken = await prisma.token.create({
        data: {
          number: tokenID,
          userid: user.id,
          type: 2,
        },
      });

      if (!newToken) return res.status(422).json({ error: "Falha ao enviar email." });

      const send = sendEmail(
        email,
        "Alteração de Senha",
        "Olá " +
          user.name +
          ",\n\n" +
          "Porfavor use o seguinte link para a mudança de senha: \n" +
          process.env.HOST_URL +
          "/password-reset/" +
          tokenID +
          "\n\nObrigado!\n"
      );

      if (!newToken) return res.status(422).json({ error: "Falha ao enviar email." });

      return res.status(200).json();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async password_change(req, res) {
    try {
      const { password, token } = req.body;

      const dbToken = await prisma.token.findMany({
        where: {
          number: token,
          type: 2,
        },
      });

      if (dbToken.length === 0) return res.status(422).json({ error: "Autorização inválida." });

      const user = await prisma.users.findMany({
        where: {
          id: dbToken.userid,
        },
      });

      if (user.length === 0) return res.status(422).json({ error: "Autorização inválida." });

      const encryptedPassword = await createPasswordHash(password);

      await prisma.token.deleteMany({
        where: {
          number: token,
          type: 2,
        },
      });

      await prisma.users.updateMany({
        where: {
          id: dbToken.userid,
        },
        data: {
          password: encryptedPassword,
        },
      });

      return res.status(200).json();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }
}

export default new usersController();
