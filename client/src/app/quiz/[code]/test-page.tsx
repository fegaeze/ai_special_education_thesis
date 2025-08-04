"use client";

import { useParams } from "next/navigation";

export default function TestPage() {
  const params = useParams();
  const code = params?.code as string;

  return (
    <div className="text-white text-center p-8">
      <h1>Test Page</h1>
      <p>Code: {code}</p>
      <p>If you can see this, the dynamic route is working!</p>
    </div>
  );
}
