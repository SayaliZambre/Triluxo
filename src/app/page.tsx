import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Real-Time Analytics Dashboard</h1>
      <Link href="/dashboard" className="mt-4 p-2 bg-primary text-black rounded-lg">
        Go to Dashboard
      </Link>
    </div>
  );
}

// import { auth } from "@clerk/nextjs";
// import Dashboard from "@/components/Dashboard";

// export default function DashboardPage() {
//   auth().protect();  // Ensures authentication
//   return <Dashboard />;
// }

