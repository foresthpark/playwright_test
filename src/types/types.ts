import { z } from "zod";

const User = z.object({
  name: z.string(),
  age: z.number(),
});

export type inferedUser = z.infer<typeof User>;

export const validateUser = (user: inferedUser) => {
  return User.safeParse(user);
};

const Address = z.object({
  street: z.string(),
  city: z.string(),
  isValidAddress: z.boolean(),
});

export type inferedAddress = z.infer<typeof Address>;

type UserWithAddress = inferedUser | inferedAddress;

const UserWithAddressSchema = z.union([User, Address]);
