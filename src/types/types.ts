import { z } from "zod";

const User = z.object({
  name: z.string(),
  age: z.number(),
});

export type inferedUser = z.infer<typeof User>;

export const validateUser = (user: inferedUser) => {
  return User.safeParse(user);
};
