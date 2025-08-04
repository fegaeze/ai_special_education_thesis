export function CenteredLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center px-4 bg-gray-100 h-[calc(100vh-120px)]">
      {children}
    </div>
  );
}
