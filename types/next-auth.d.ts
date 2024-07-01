import type { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: DefaultSession['user'] & {
      imageId: string | null | undefined,
      id: string | null | undefined,
    }
  }
}
