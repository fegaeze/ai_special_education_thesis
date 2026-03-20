// Middleware redirects every visitor away from / before this page renders:
// authenticated  → /teacher-dashboard
// unauthenticated → /login
// This component is only reached in the unlikely event of a client-side
// navigation to "/", so show nothing while that redirect happens.
export default function HomePage() {
  return null;
}
