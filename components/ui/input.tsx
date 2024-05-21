import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string | undefined
  onFocusRemoveError?: () => void // Add this prop to handle error removal on focus
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, onFocusRemoveError, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${error ? 'border-red-500 placeholder:text-red-400 ' : ''}`,
          className,
        )}
        ref={ref}
        onFocus={onFocusRemoveError} // Handle focus event to remove error
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
