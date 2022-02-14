import bcrypt from "bcryptjs";

export const createPasswordHash = async (password) => {
  return bcrypt.hash(password, 8);
};

export const checkPassword = async (password, hash) => {
  return bcrypt.compare(password, hash);
};
