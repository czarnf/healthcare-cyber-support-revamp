// components/RealTimeNotifications.tsx
import React from "react";
import useWebSocket from "../utils/websocket";
const RealTimeNotifications = () => {
  const { messages } = useWebSocket("ws://localhost:5000"); // Adjust to your WebSocket server URL

  return (
    <div>
      <h1>Real-Time Notifications</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default RealTimeNotifications;
