import Link from "next/link";
import { AutoTypingResume } from "home/AutoTypingResume";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:min-h-[calc(100vh-4rem)]">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"></div>
      <div className="container relative mx-auto px-4 lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2">
          <div className="space-y-8">
            <div className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 shadow-sm">
              ✨ Create Your Dream Resume
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-5xl">
              Build a Professional Resume in{" "}
              <span className="text-blue-600">Minutes</span>
            </h1>
            <p className="text-xl text-gray-600">
              Create stunning, ATS-friendly resumes with our free, open-source builder. No sign-up required.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="/resume-import"
                className="group inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
              >
                Create Resume
                <svg
                  className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="/resume-parser"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50"
              >
                Test ATS Readability
              </Link>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <svg className="mr-1 h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Free Forever
              </div>
              <div className="flex items-center">
                <svg className="mr-1 h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No Sign Up
              </div>
              <div className="flex items-center">
                <svg className="mr-1 h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                ATS Friendly
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-1/2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-blue-100 to-purple-100 opacity-50 blur-xl"></div>
            <div className="relative rounded-xl bg-white p-4 shadow-2xl">
              <AutoTypingResume />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
