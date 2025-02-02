import { useState, useEffect } from "react";
import { useWebSocket } from "@/contexts/WebSocketContext";

export default function Chat() {
  const { socket } = useWebSocket();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socket.on("chatMessage", (message) => setMessages((prev) => [...prev, message]));
  }, [socket]);

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit("chatMessage", input);
      setInput("");
    }
  };

  return (
    <div className="p-4 bg-darkCard rounded-lg">
      <h2 className="text-lg font-bold">Support Chat</h2>
      <div className="h-40 overflow-auto border p-2 bg-darkBg rounded-lg">
        {messages.map((msg, i) => <p key={i}>{msg}</p>)}
      </div>
      <input
        className="mt-2 p-2 bg-darkBg border rounded-lg w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={sendMessage} className="mt-2 p-2 bg-primary text-black rounded-lg">
        Send
      </button>
    </div>
  );
}
