import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { WeatherWidget } from "@/components/weather-widget"
import { ThreatIntelligence } from "@/components/threat-intelligence"
import { VulnerabilityReport } from "@/components/vulnerability-report"
import { OSMonitoring } from "@/components/os-monitoring"
import { DeviceUsage } from "@/components/device-usage"
import { EncryptionStatus } from "@/components/encryption-status"
import { NetworkHealth } from "@/components/network-health"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Suspense fallback={<CardSkeleton />}>
          <WeatherWidget />
        </Suspense>
        <Card>
          <CardHeader>
            <CardTitle>Threat Intelligence</CardTitle>
            <CardDescription>Latest cybersecurity threats</CardDescription>
          </CardHeader>
          <CardContent>
            <ThreatIntelligence />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Vulnerability Report</CardTitle>
            <CardDescription>System vulnerabilities overview</CardDescription>
          </CardHeader>
          <CardContent>
            <VulnerabilityReport />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>OS Monitoring</CardTitle>
            <CardDescription>Operating systems in use</CardDescription>
          </CardHeader>
          <CardContent>
            <OSMonitoring />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Device Usage</CardTitle>
            <CardDescription>Active devices on the network</CardDescription>
          </CardHeader>
          <CardContent>
            <DeviceUsage />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Encryption Status</CardTitle>
            <CardDescription>Data encryption overview</CardDescription>
          </CardHeader>
          <CardContent>
            <EncryptionStatus />
          </CardContent>
        </Card>
        <Card className="md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle>Network Health</CardTitle>
            <CardDescription>Overall network status and performance</CardDescription>
          </CardHeader>
          <CardContent>
            <NetworkHealth />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function CardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-5 w-1/3" />
        <Skeleton className="h-4 w-4/5" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-[200px] w-full" />
      </CardContent>
    </Card>
  )
}

