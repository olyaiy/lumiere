import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <main className="flex min-h-[50vh] flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="font-cormorant text-xl text-muted-foreground">
          Creating your experience...
        </p>
      </div>
    </main>
  )
} 