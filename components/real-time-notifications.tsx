"use client";
import { useEffect, useState } from "react"
import useWebSocket from "@/utils/websocket"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Bell } from "lucide-react"

export function RealTimeNotifications() {
  const [notifications, setNotifications] = useState<string[]>([])
  const { messages, socket } = useWebSocket("ws://localhost:8080")
  const isConnected = socket !== null;

  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      setNotifications((prev) => [lastMessage, ...prev].slice(0, 5))
    }
  }, [messages])

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">Real-time Notifications</h3>
      {isConnected ? (
        notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <Alert key={index}>
              <Bell className="h-4 w-4" />
              <AlertTitle>New Notification</AlertTitle>
              <AlertDescription>{notification}</AlertDescription>
            </Alert>
          ))
        ) : (
          <p>No new notifications</p>
        )
      ) : (
        <p>Connecting to real-time updates...</p>
      )}
    </div>
  )
}

