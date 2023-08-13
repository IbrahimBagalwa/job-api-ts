import bcrypt from "bcryptjs";

const { genSalt, hash, compare } = bcrypt;

const encryptPassword = async (password: string): Promise<string> => {
  const salt = await genSalt(10);
  const hashPassword = await hash(password, salt);
  return hashPassword;
};

const isPasswordValid = async (
  currentPassword: string,
  hashPassword: string
): Promise<boolean> => {
  const isPasswordChecked = await compare(currentPassword, hashPassword);
  return isPasswordChecked;
};

export { encryptPassword, isPasswordValid };
