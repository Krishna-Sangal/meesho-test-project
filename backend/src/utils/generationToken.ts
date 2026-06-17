import * as jwt from "jsonwebtoken";

export const generateToken = (user: any) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET environment variable is not defined');
  }

  return jwt.sign(
    {
      id: user._id
      
    },
    secret,
    { expiresIn: "7d" }
  );
};