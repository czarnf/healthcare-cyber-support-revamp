"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function IncidentsPage() {
  const [incidentType, setIncidentType] = useState("")
  const [incidentDescription, setIncidentDescription] = useState("")
  const [incidents, setIncidents] = useState([
    { id: 1, type: "Malware", description: "Ransomware detected on workstation XYZ", timestamp: "2024-01-26 14:30" },
    {
      id: 2,
      type: "Phishing",
      description: "Multiple users reported suspicious emails",
      timestamp: "2024-01-25 09:15",
    },
  ])
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (incidentType && incidentDescription) {
      const newIncident = {
        id: incidents.length + 1,
        type: incidentType,
        description: incidentDescription,
        timestamp: new Date().toLocaleString(),
      }
      setIncidents([newIncident, ...incidents])
      setIncidentType("")
      setIncidentDescription("")
      toast({
        title: "Incident Reported",
        description: "Your incident has been successfully reported.",
      })
    }
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Report an Incident</CardTitle>
          <CardDescription>Provide details about the cybersecurity incident</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Select value={incidentType} onValueChange={setIncidentType}>
              <SelectTrigger>
                <SelectValue placeholder="Select incident type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Malware">Malware</SelectItem>
                <SelectItem value="Phishing">Phishing</SelectItem>
                <SelectItem value="DDoS">DDoS</SelectItem>
                <SelectItem value="Data Breach">Data Breach</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              placeholder="Describe the incident..."
              value={incidentDescription}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setIncidentDescription(e.target.value)}
            />
            <Button type="submit">Submit Report</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Incident History</CardTitle>
          <CardDescription>Recent cybersecurity incidents</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {incidents.map((incident: { id: number; type: string; description: string; timestamp: string }) => (
              <Alert key={incident.id}>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>
                  {incident.type} - {incident.timestamp}
                </AlertTitle>
                <AlertDescription>{incident.description}</AlertDescription>
              </Alert>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

