import Image from "next/image";

// Middleware redirects authenticated visitors away from auth pages before this
// layout renders, so we can unconditionally show the auth shell.
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Branding panel */}
      <div className="relative hidden md:flex w-2/3 bg-gradient-to-br from-blue-700 to-orange-500 items-center justify-center overflow-hidden">
        <Image
          src="/images/auth-bg.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          fill
          priority
        />
      </div>

      {/* Form panel */}
      <div className="flex flex-1 items-center justify-center bg-gradient-to-br from-white to-blue-50 py-12 px-8">
        <div className="w-full max-w-md mx-auto min-h-[500px] flex flex-col justify-center">
          <Image
            src="/images/nutikas-logo.png"
            alt="Nutikas Logo"
            className="mx-auto mb-24"
            width={100}
            height={100}
            priority
          />
          {children}
        </div>
      </div>
    </div>
  );
}
