import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { db } from './db'
import bcrypt from 'bcrypt'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'text',
          placeholder: 'jsmith@gmai.com',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: '******',
        },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null
          }

          const existingUser = await db.user.findUnique({
            where: { email: credentials.email },
          })

          if (!existingUser) {
            return null
          }

          if (existingUser.password) {
            const passwordMatch = await bcrypt.compare(
              credentials.password,
              existingUser.password,
            )
            if (!passwordMatch) {
              return null
            }
          }

          return {
            id: `${existingUser.id}`,
            name: existingUser.name,
            image: existingUser.image,
            imageId: existingUser.imageId,
            email: existingUser.email,
          }
        } catch (error) {
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session }) {
      const existingUser = await db.user.findUnique({
        where: { email: token?.email },
      })

      return {
        ...token,
        id: existingUser!.id,
        image: existingUser!.image,
        imageId: existingUser!.imageId,
      }
    },
    async session({ session, token }) {
      return {
        ...session,
        user: { ...session.user, imageId: token.imageId, image: token.image, id: token.id},
      }
    },
  },
}
