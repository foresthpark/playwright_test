import type { NextApiRequest, NextApiResponse } from "next";
import type { inferedUser } from "../../types/types";
import { validateUser } from "../../types/types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user: inferedUser = req.body;

  const isUserValid = validateUser(user);

  if (!isUserValid.success) {
    return res
      .status(400)
      .json({
        success: false,
        message: "Invalid user input data",
        errMessage: isUserValid.error,
      });
  }

  return res.status(200).json({
    success: true,
    message: `Hello, ${user.name}. You are ${user.age} years old`,
  });
}
