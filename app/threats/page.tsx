"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export default function ThreatsPage() {
  const [threats, setThreats] = useState([])
  const [filteredThreats, setFilteredThreats] = useState([])
  const [threatType, setThreatType] = useState("all")
  const [threatSeverity, setThreatSeverity] = useState("all")

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      const mockThreats = [
        { id: 1, type: "Malware", severity: "High", description: "New ransomware strain detected" },
        { id: 2, type: "Phishing", severity: "Medium", description: "Targeted phishing campaign reported" },
        { id: 3, type: "DDoS", severity: "High", description: "Large-scale DDoS attack in progress" },
        { id: 4, type: "Malware", severity: "Low", description: "Potential adware detected on network" },
      ]
      setThreats(mockThreats)
      setFilteredThreats(mockThreats)
    }, 1000)
  }, [])

  const handleFilter = () => {
    let filtered = threats
    if (threatType !== "all") {
      filtered = filtered.filter((threat) => threat.type === threatType)
    }
    if (threatSeverity !== "all") {
      filtered = filtered.filter((threat) => threat.severity === threatSeverity)
    }
    setFilteredThreats(filtered)
  }

  const threatStats = [
    { name: "Malware", count: threats.filter((t) => t.type === "Malware").length },
    { name: "Phishing", count: threats.filter((t) => t.type === "Phishing").length },
    { name: "DDoS", count: threats.filter((t) => t.type === "DDoS").length },
  ]

  return (
    <div className="container mx-auto py-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Filter Threats</CardTitle>
          <CardDescription>Customize your threat feed</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-4">
          <Select value={threatType} onValueChange={setThreatType}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Threat Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="Malware">Malware</SelectItem>
              <SelectItem value="Phishing">Phishing</SelectItem>
              <SelectItem value="DDoS">DDoS</SelectItem>
            </SelectContent>
          </Select>
          <Select value={threatSeverity} onValueChange={setThreatSeverity}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Severity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="High">High</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleFilter}>Apply Filters</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Real-Time Threat Feed</CardTitle>
          <CardDescription>Latest cybersecurity threats</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredThreats.map((threat) => (
              <Alert key={threat.id} variant={threat.severity === "High" ? "destructive" : "default"}>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>
                  {threat.type} - {threat.severity} Severity
                </AlertTitle>
                <AlertDescription>{threat.description}</AlertDescription>
              </Alert>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Threat Statistics</CardTitle>
          <CardDescription>Overview of threat types</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={threatStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

