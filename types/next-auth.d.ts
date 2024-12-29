import { DefaultSession, DefaultJWT } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    id: string; // Add the custom 'id' property to the session
  }

  interface JWT extends DefaultJWT {
    id: string; // Add the custom 'id' property to the JWT
  }
}
