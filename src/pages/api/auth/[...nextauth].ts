import NextAuth, { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // 🚨 Garante que credentials existe
        if (!credentials) return null;

        // 🚨 Desestrutura para tipar corretamente
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        // 🔒 Validação (mockada por enquanto)
        if (email === "admin@example.com" && password === "password") {
          // 🚨 Retornar id como string
          return { id: "1", name: "Admin" } as User;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOptions);
