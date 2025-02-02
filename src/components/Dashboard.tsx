import { useWebSocket } from "@/contexts/WebSocketContext";
import { useState, useEffect } from "react";
import { LineChart, BarChart } from "@/components/Charts";

export default function Dashboard() {
    const { socket, connected } = useWebSocket();
    const [activeUsers, setActiveUsers] = useState(0);
    const [activityData, setActivityData] = useState([]);
  
  useEffect(() => {
    socket.on("activeUsers", (data) => setActiveUsers(data));
    socket.on("activityMetrics", (data) => setActivityData(data));
  }, [socket]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Real-Time Dashboard</h1>
      <p className="text-primary">Connection: {connected ? "🟢 Online" : "🔴 Offline"}</p>
      <div className="mt-4 p-4 bg-darkCard rounded-lg">
        <h2 className="text-lg">Active Users: {activeUsers}</h2>
      </div>
    </div>
  );
}
