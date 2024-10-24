import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">MLOps Dashboard</h1>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
          <SignedIn>
            <h2 className="text-xl font-semibold mb-4">Welcome Back!</h2>
            <UserButton />
            <p className="text-gray-600">
              Here&apos;s what&apos;s happening in your projects.
            </p>

            {/* Project Overview Section */}
            <section className="mt-6">
              <h3 className="text-lg font-bold">Project Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 border border-blue-300 rounded-lg p-4">
                  <h4 className="font-semibold">Active Projects</h4>
                  <p className="text-xl">5</p>
                </div>
                <div className="bg-green-50 border border-green-300 rounded-lg p-4">
                  <h4 className="font-semibold">Models Deployed</h4>
                  <p className="text-xl">12</p>
                </div>
                <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4">
                  <h4 className="font-semibold">Pending Reviews</h4>
                  <p className="text-xl">3</p>
                </div>
              </div>
            </section>

            {/* Model Management Section */}
            <section className="mt-6">
              <h3 className="text-lg font-bold">Model Management</h3>
              <p className="text-gray-600">Latest Model: <strong>Model-X</strong></p>
              <p className="text-gray-600">Status: <span className="text-green-500">Deployed</span></p>
            </section>

            {/* User Profile Section */}
            <section className="mt-6">
              <h3 className="text-lg font-bold">Your Profile</h3>
              <p className="text-gray-600">Email: user@example.com</p>
              <p className="text-gray-600">Role: MLOps Engineer</p>
            </section>
          </SignedIn>

          <SignedOut>
            <h2 className="text-xl font-semibold">Please Sign In</h2>
            <p className="mt-2 text-gray-600">
              Access powerful MLOps tools by signing in.
            </p>
            <Link href="/sign-in">
              Sign In
            </Link>
          </SignedOut>
        </div>
      </main>

      <footer className="bg-gray-200 text-center p-4">
        <p className="text-gray-600">© 2024 MLOps Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
}
