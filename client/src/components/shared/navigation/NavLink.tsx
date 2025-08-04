import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
  exact = false,
  className = "",
  ...props
}: {
  href: string;
  children: React.ReactNode;
  exact?: boolean;
  className?: string;
  [key: string]: any;
}) {
  const pathname = usePathname();
  const isActive = exact
    ? pathname === href
    : href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`text-sm text-gray-700 px-2 py-1 rounded transition-colors ${
        isActive ? "text-primary font-semibold" : "hover:text-gray-700"
      } ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
