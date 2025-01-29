"use client"

import { useEffect, useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import useWebSocket from "@/utils/websocket"

const severityColors = {
  Low: "bg-green-500",
  Medium: "bg-yellow-500",
  High: "bg-red-500",
}

export function ThreatIntelligence() {
  const [threats, setThreats] = useState<any[]>([])
  const { messages, socket } = useWebSocket("ws://localhost:8080")
  
  useEffect(() => {
    if (messages.length > 0) {
      const newMessage = JSON.parse(messages[messages.length - 1]) // Parse the latest message as JSON
      if (newMessage && newMessage.type === "threat") {
        setThreats((prev) => [newMessage.data, ...prev].slice(0, 5))
      }
    }
  }, [messages]) // Dependency on messages to trigger updates

  // If WebSocket is not connected yet, show loading spinner
  if (!socket || socket.readyState !== WebSocket.OPEN) {
    return (
      <div className="flex items-center justify-center h-[200px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {threats.map((threat: { id: string; type: string; description: string; severity: keyof typeof severityColors }) => (
        <Alert
          key={threat.id}
          variant="default"
          className="relative overflow-hidden border-l-4 transition-all hover:translate-x-1"
        >
          <AlertCircle className="h-4 w-4 text-primary" />
          <AlertTitle className="font-semibold text-primary">{threat.type}</AlertTitle>
          <AlertDescription>{threat.description}</AlertDescription>
          <div className={cn("absolute top-0 right-0 w-2 h-full", severityColors[threat.severity])} />
        </Alert>
      ))}
    </div>
  )
}
