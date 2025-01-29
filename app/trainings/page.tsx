"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, PlayCircle } from "lucide-react"

const trainingModules = [
  { id: 1, name: "Introduction to Cybersecurity", duration: "30 min", completed: true },
  { id: 2, name: "Password Security", duration: "45 min", completed: true },
  { id: 3, name: "Phishing Awareness", duration: "60 min", completed: false },
  { id: 4, name: "Data Privacy", duration: "45 min", completed: false },
  { id: 5, name: "Mobile Device Security", duration: "30 min", completed: false },
  { id: 6, name: "Social Engineering", duration: "60 min", completed: false },
  { id: 7, name: "Incident Response", duration: "90 min", completed: false },
  { id: 8, name: "Compliance and Regulations", duration: "60 min", completed: false },
]

export default function TrainingsPage() {
  const [completedModules, setCompletedModules] = useState(trainingModules.filter((module) => module.completed).length)

  const handleStartModule = (moduleId) => {
    // In a real application, this would start the training module
    console.log(`Starting module ${moduleId}`)
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Cybersecurity Training Program</CardTitle>
          <CardDescription>Enhance your cybersecurity knowledge and skills</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Your Progress</h3>
            <Progress value={(completedModules / trainingModules.length) * 100} className="w-full" />
            <p className="text-sm text-muted-foreground mt-2">
              {completedModules} of {trainingModules.length} modules completed
            </p>
          </div>
          <div className="space-y-4">
            {trainingModules.map((module) => (
              <Card key={module.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{module.name}</CardTitle>
                    <Badge variant={module.completed ? "default" : "outline"}>
                      {module.completed ? "Completed" : "Pending"}
                    </Badge>
                  </div>
                  <CardDescription>{module.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button onClick={() => handleStartModule(module.id)} disabled={module.completed}>
                    {module.completed ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" /> Completed
                      </>
                    ) : (
                      <>
                        <PlayCircle className="mr-2 h-4 w-4" /> Start Module
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

