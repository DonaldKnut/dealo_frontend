import NextAuth, { type DefaultSession } from "next-auth";
import { UserRole } from "@prisma/client";
import { JWT } from "@auth/core/jwt";

export type ExtendedUser = DefaultSession["user"] & {
  customField: string;
  role: UserRole;
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
  credits: number;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      credits: number;
    } & DefaultSession["user"];
  }
}
