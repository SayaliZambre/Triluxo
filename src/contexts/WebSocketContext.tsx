import { createContext, useEffect, useState, useContext } from "react";
import io from "socket.io-client";

const WebSocketContext = createContext(null);
const socket = io("http://localhost:4000"); // WebSocket Server

export const WebSocketProvider = ({ children }) => {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    socket.on("connect", () => setConnected(true));
    socket.on("disconnect", () => setConnected(false));

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <WebSocketContext.Provider value={{ socket, connected }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => useContext(WebSocketContext);
