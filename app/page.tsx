import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export default function Page() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-blue-50 px-4 py-12">
      <Card className="w-full max-w-md border-blue-100 p-8 sm:p-10">
        <div className="flex flex-col items-center text-center">
          <div
            className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-3xl font-semibold text-white"
            aria-hidden="true"
          >
            TV
          </div>

          <h1 className="mt-6 text-2xl font-bold text-blue-900 sm:text-3xl">{"Welcome to Vinay's Website"}</h1>
          <p className="mt-1 text-sm font-medium text-blue-600">Now on GitHub</p>
          <p className="mt-1 text-sm font-medium uppercase tracking-wide text-blue-600">Electrical and Electronics Engineering Student</p>

          <p className="mt-6 text-pretty leading-relaxed text-blue-950/70">
            I enjoy building websites and learning programming. I am currently working on improving my web development
            skills.
          </p>

          <div className="mt-8 w-full border-t border-blue-100 pt-6">
            <Button asChild className="h-auto w-full bg-blue-600 py-3 hover:bg-blue-700">
              <a
                href="mailto:vinaythota543@gmail.com"
                className="flex items-center justify-center gap-2 whitespace-normal break-all"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                vinaythota543@gmail.com
              </a>
            </Button>
          </div>
        </div>
      </Card>
    </main>
  )
}
