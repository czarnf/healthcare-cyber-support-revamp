"use client"

import { useState, useEffect } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

type NetworkData = {
  time: string
  latency: number
  bandwidth: number
}

export function NetworkHealth() {
  const [data, setData] = useState<NetworkData[]>([])

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setData([
        { time: "00:00", latency: 20, bandwidth: 95 },
        { time: "04:00", latency: 18, bandwidth: 98 },
        { time: "08:00", latency: 25, bandwidth: 90 },
        { time: "12:00", latency: 30, bandwidth: 85 },
        { time: "16:00", latency: 22, bandwidth: 92 },
        { time: "20:00", latency: 19, bandwidth: 97 },
      ])
    }, 1000)
  }, [])

  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Line yAxisId="left" type="monotone" dataKey="latency" stroke="#8884d8" />
          <Line yAxisId="right" type="monotone" dataKey="bandwidth" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

