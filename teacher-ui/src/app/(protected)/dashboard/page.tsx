"use client";

import { useRouter } from "next/navigation";
import { logout } from "@/lib/auth";

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src="/images/nutikas-logo.svg" alt="Nutikas Logo" className="h-8" />
              <span className="ml-3 text-xl font-semibold text-gray-900">Dashboard</span>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Welcome to Nutikas Dashboard</h3>
              <p className="text-gray-500">Your dashboard content will appear here.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 