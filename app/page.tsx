import { Mail } from "lucide-react"

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-blue-50 px-6 py-12">
      <section
        aria-labelledby="card-name"
        className="w-full max-w-md rounded-2xl border border-blue-100 bg-white p-8 shadow-lg sm:p-10"
      >
        <div className="mb-6 flex items-center gap-4">
          <div
            aria-hidden="true"
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-600 text-2xl font-semibold text-white"
          >
            TV
          </div>
          <div>
            <h1 id="card-name" className="text-2xl font-bold text-balance text-blue-900">
              Thota Vinay
            </h1>
            <p className="mt-1 font-medium text-blue-600">Computer Science Student</p>
          </div>
        </div>

        <p className="text-pretty leading-relaxed text-slate-600">
          I enjoy building websites and learning programming. I am currently working on improving my web development
          skills.
        </p>

        <div className="mt-8 border-t border-blue-100 pt-6">
          <a
            href="mailto:vinaythota543@gmail.com"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            vinaythota543@gmail.com
          </a>
        </div>
      </section>
    </main>
  )
}
