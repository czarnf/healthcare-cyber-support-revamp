"use client"

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"

type EncryptionData = {
  type: string
  percentage: number
}

export function EncryptionStatus() {
  const [data, setData] = useState<EncryptionData[]>([])

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setData([
        { type: "Data at Rest", percentage: 85 },
        { type: "Data in Transit", percentage: 95 },
        { type: "End-to-End Encryption", percentage: 70 },
      ])
    }, 1000)
  }, [])

  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <div key={index}>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">{item.type}</span>
            <span className="text-sm font-medium">{item.percentage}%</span>
          </div>
          <Progress value={item.percentage} className="w-full" />
        </div>
      ))}
    </div>
  )
}

