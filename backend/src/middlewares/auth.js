import jwt from "jsonwebtoken";
import { promisify } from "util";
import "dotenv/config";

export default async (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).json({ error: "Aplicação não autorizada." });
  }

  const [, token] = authorization.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, process.env.SESSION_SECRET);
    req._id = decoded.id;
    return next();
  } catch (err) {
    return res.status(401).json({ error: "Aplicação não autorizada." });
  }
};
