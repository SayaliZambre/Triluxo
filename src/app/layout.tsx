import { ClerkProvider } from "@clerk/nextjs";
import { WebSocketProvider } from "@/contexts/WebSocketContext";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <WebSocketProvider>
        <html lang="en">
          <body className="bg-darkBg text-darkText">
            <Navbar />
            {children}
          </body>
        </html>
      </WebSocketProvider>
    </ClerkProvider>
  );
}
