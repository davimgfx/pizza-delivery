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
          placeholder: 'jsmith@gmail.com',
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
            where: { email: credentials.email || undefined },
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
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.image = user.image
      } else {
        const existingUser = await db.user.findUnique({
          where: { email: token.email || undefined },
        })
        if (existingUser) {
          token.id = existingUser.id
          token.image = existingUser.image
          token.imageId = existingUser.imageId
        }
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.id as string
      session.user.image = token.image as string | null | undefined
      session.user.imageId = token.imageId as string | null | undefined
      return session
    },
  },
}
