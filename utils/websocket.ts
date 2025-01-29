// utils/WebSocket.ts
import { useEffect, useState } from "react";

const useWebSocket = (url: string) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socketInstance = new WebSocket(url);

    socketInstance.onopen = () => {
      console.log("WebSocket connected");
    };

    socketInstance.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    socketInstance.onerror = (error) => {
      console.error("WebSocket Error: ", error);
    };

    socketInstance.onclose = () => {
      console.log("WebSocket closed");
    };

    setSocket(socketInstance);

    // Cleanup on component unmount
    return () => {
      socketInstance.close();
    };
  }, [url]);

  return { messages, socket };
};

export default useWebSocket;
