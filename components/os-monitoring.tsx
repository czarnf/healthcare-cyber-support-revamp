"use client"

import { useState, useEffect } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { Loader2 } from "lucide-react"

type OSData = {
  name: string
  value: number
}

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"]

export function OSMonitoring() {
  const [data, setData] = useState<OSData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setData([
        { name: "Windows", value: 55 },
        { name: "macOS", value: 25 },
        { name: "Linux", value: 15 },
        { name: "iOS", value: 3 },
        { name: "Android", value: 2 },
      ])
      setLoading(false)
    }, 1500)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[300px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

