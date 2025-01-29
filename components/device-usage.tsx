"use client"

import { useState, useEffect } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

type DeviceData = {
  name: string
  count: number
}

export function DeviceUsage() {
  const [data, setData] = useState<DeviceData[]>([])

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setData([
        { name: "Desktops", count: 120 },
        { name: "Laptops", count: 200 },
        { name: "Tablets", count: 50 },
        { name: "Smartphones", count: 180 },
        { name: "IoT Devices", count: 30 },
      ])
    }, 1000)
  }, [])

  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

