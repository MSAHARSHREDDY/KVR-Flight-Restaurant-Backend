import jwt from "jsonwebtoken";

const generateToken = (id: string) => {
  return jwt.sign(
    { id },
    process.env.jwt_secret as string,
    {
      expiresIn: "7d",
    }
  );
};

export default generateToken;