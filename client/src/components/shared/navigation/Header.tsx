import Image from "next/image";
import { useAuth } from "@/contexts/AuthContext";
import ClassSwitcher from "@/components/shared/navigation/ClassSwitcher";
import { Button } from "../../ui/button";
import Link from "next/link";
import { LogOut } from "lucide-react";

export default function Header({ hasError }: Readonly<{ hasError?: boolean }>) {
  const { logout } = useAuth();

  return (
    <nav className="bg-white shadow-sm border-b-1 border-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto py-1">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center" aria-label="Home">
            <Image
              src="/images/nutikas-logo.png"
              alt="Nutikas Logo"
              width={70}
              height={50}
              priority
              className="w-20 h-12"
            />
          </Link>

          <div className="flex items-center space-x-4 ml-auto">
            {!hasError && <ClassSwitcher />}
            <Button
              className="text-white bg-red-600 hover:bg-red-700 p-2 h-9 w-9 flex items-center justify-center"
              onClick={logout}
              aria-label="Logout"
              title="Logout"
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
