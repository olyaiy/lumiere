'use client'

import { Button } from "@/components/ui/button"
import { useEffect } from "react"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <main className="flex min-h-[50vh] flex-col items-center justify-center px-6">
      <div className="flex max-w-md flex-col items-center gap-6 text-center">
        <h2 className="font-cormorant text-3xl font-semibold">
          An Unexpected Pause
        </h2>
        <p className="text-muted-foreground">
          We apologize for this interruption in your experience. Our team has been notified and is working to resolve this quickly.
        </p>
        <div className="flex gap-4">
          <Button
            onClick={reset}
            variant="default"
            className="bg-primary hover:bg-primary/90"
          >
            Try Again
          </Button>
          <Button
            variant="outline"
            onClick={() => window.location.href = '/'}
            className="border-primary text-primary hover:bg-primary/5"
          >
            Return Home
          </Button>
        </div>
      </div>
    </main>
  )
} 