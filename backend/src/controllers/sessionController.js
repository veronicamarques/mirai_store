import { checkPassword } from "../services/hash";
import prisma from "../prisma/client";
import jwt from "jsonwebtoken";

class sessionController {
  async create(req, res) {
    try {
      const { email, password } = req.body;

      const user = await prisma.users.findUnique({
        where: {
          email,
        },
      });

      if (!user) return res.status(422).json({ error: "Usuário ou senha incorretos." });

      if (!(await checkPassword(password, user.password))) return res.status(422).json({ error: "Usuário ou senha incorretos." });

      if (!user.active) return res.status(422).json({ error: "Endereço de email não confirmado." });

      const { id } = user;

      return res.status(200).json({
        user: {
          id: user.id,
          email: user.email,
        },
        token: jwt.sign({ id }, process.env.SESSION_SECRET, {
          expiresIn: process.env.SESSION_TIME,
        }),
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }
}

export default new sessionController();
