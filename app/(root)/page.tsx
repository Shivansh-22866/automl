import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-800">MLOps Dashboard</h1>
            </div>
            
            {/* Right side of navbar with profile */}
            <div className="flex items-center">
              <SignedIn>
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "h-8 w-8 rounded-full"
                    }
                  }}
                />
              </SignedIn>
              <SignedOut>
                <Link 
                  href="/sign-in"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Sign In
                </Link>
              </SignedOut>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold text-gray-800">Welcome Back!</h2>
            <p className="text-gray-600">Here&apos;s what&apos;s happening in your projects.</p>
          </div>

          {/* Project Overview Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Project Overview</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">Active Projects</p>
                <p className="text-2xl font-bold text-blue-600">5</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-600">Models Deployed</p>
                <p className="text-2xl font-bold text-green-600">12</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-gray-600">Pending Reviews</p>
                <p className="text-2xl font-bold text-yellow-600">3</p>
              </div>
            </div>
          </div>

          {/* Model Management Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Model Management</h3>
            <div className="space-y-2">
              <p className="text-gray-600">Latest Model: <span className="font-medium">Model-X</span></p>
              <p className="text-gray-600">Status: <span className="text-green-600">Deployed</span></p>
            </div>
          </div>

          {/* User Profile Section */}
          <SignedIn>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Your Profile</h3>
              <div className="space-y-2">
                <p className="text-gray-600">Email: user@example.com</p>
                <p className="text-gray-600">Role: MLOps Engineer</p>
              </div>
            </div>
          </SignedIn>
          
          <SignedOut>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-lg font-semibold mb-2">Please Sign In</h3>
              <p className="text-gray-600 mb-4">Access powerful MLOps tools by signing in.</p>
              <Link 
                href="/sign-in"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Sign In
              </Link>
            </div>
          </SignedOut>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-gray-500 text-sm">
            © 2024 MLOps Dashboard. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}