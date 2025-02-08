// app/page.tsx
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth"; // adjust the path as needed

export default async function IndexPage() {
  // Fetch the session on the server
  const session = await getServerSession(authOptions);

  // If the session exists, redirect to /home; otherwise, redirect to /login
  if (session) {
    redirect("/home");
  } else {
    redirect("/login");
  }
}
