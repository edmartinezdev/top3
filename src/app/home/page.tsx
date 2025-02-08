// app/home/page.tsx
"use client";

import { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Home</h1>
        <p>Welcome, {session?.user?.name || "User"}!</p>
        <Button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="mt-4"
        >
          Logout
        </Button>
      </Card>
    </div>
  );
}
