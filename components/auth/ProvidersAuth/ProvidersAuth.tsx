import { GithubIcon, GoogleIcon, SpinnerIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import React from 'react'

export interface ProvidersAuthProps {
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  text: string
}

export default function ProvidersAuth({
  isLoading,
  setIsLoading,
  text
}: ProvidersAuthProps) {
  async function handleGoogleSignIn() {
    setIsLoading(true)
    await signIn('google')
    setIsLoading(false)
  }

  async function handleGithubSignIn() {
    setIsLoading(true)
    await signIn('github')
    setIsLoading(false)
  }

  return (
    <>
      <Button
        className="w-full mb-4"
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={handleGoogleSignIn}
      >
        {isLoading ? (
          <SpinnerIcon
            className="mr-2 h-4 w-4 animate-spin"
            data-testid="loading icon"
          />
        ) : (
          <GoogleIcon className="mr-2 h-4 w-4" data-testid="google icon" />
        )}
        {text}{' '}Google
      </Button>
      <Button
        className="w-full mb-4"
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={handleGithubSignIn}
      >
        {isLoading ? (
          <SpinnerIcon
            className="mr-2 h-4 w-4 animate-spin"
            data-testid="loading icon"
          />
        ) : (
          <GithubIcon className="mr-2 h-4 w-4" data-testid="github icon" />
        )}{' '}
        {text}{' '}Github
      </Button>
    </>
  )
}
