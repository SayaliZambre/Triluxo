import { auth } from "@clerk/nextjs";
import Dashboard from "@/components/Dashboard";

export default function DashboardPage() {
  auth().protect();  // Ensures only logged-in users can access

  return <Dashboard />;
}
