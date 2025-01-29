"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Sun, CloudRain, Loader2 } from "lucide-react"

interface Weather {
  temperature: number;
  condition: string;
  humidity: number;
}

export function WeatherWidget() {
  const [weather, setWeather] = useState<Weather | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setWeather({
        temperature: 22,
        condition: "Partly Cloudy",
        humidity: 60,
      })
      setLoading(false)
    }, 1500)
  }, [])

  if (loading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center h-[200px]">
          <Loader2 className="h-8 w-8 animate-spin" />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Weather</CardTitle>
        <CardDescription>Local weather conditions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          {weather && (
            <div>
              {weather && (
                <>
                  <p className="text-3xl font-bold">{weather.temperature}°C</p>
                  <p className="text-muted-foreground">{weather.condition}</p>
                  <p className="text-sm text-muted-foreground">Humidity: {weather.humidity}%</p>
                </>
              )}
            </div>
          )}
          <div className="text-blue-500 dark:text-blue-400">
            {weather && weather.condition.toLowerCase().includes("cloud") ? (
              <Cloud className="h-16 w-16" />
            ) : weather && weather.condition.toLowerCase().includes("rain") ? (
              <CloudRain className="h-16 w-16" />
            ) : (
              <Sun className="h-16 w-16 text-yellow-400" />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

