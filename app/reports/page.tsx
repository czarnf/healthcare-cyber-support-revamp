"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function ReportsPage() {
  const [reportType, setReportType] = useState("")
  const [reportPeriod, setReportPeriod] = useState("")
  const { toast } = useToast()

  const handleGenerateReport = () => {
    if (reportType && reportPeriod) {
      toast({
        title: "Report Generated",
        description: `Your ${reportType} report for the ${reportPeriod} has been generated.`,
      })
    }
  }

  const reports = [
    { id: 1, name: "Monthly Threat Summary", date: "2024-01-01", type: "Threats" },
    { id: 2, name: "Q4 Incident Report", date: "2023-12-31", type: "Incidents" },
    { id: 3, name: "Annual Vulnerability Assessment", date: "2023-12-15", type: "Vulnerabilities" },
  ]

  return (
    <div className="container mx-auto py-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Generate Report</CardTitle>
          <CardDescription>Create custom cybersecurity reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Select value={reportType} onValueChange={setReportType}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select report type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Threats">Threats</SelectItem>
                <SelectItem value="Incidents">Incidents</SelectItem>
                <SelectItem value="Vulnerabilities">Vulnerabilities</SelectItem>
              </SelectContent>
            </Select>
            <Select value={reportPeriod} onValueChange={setReportPeriod}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select time period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Last Week">Last Week</SelectItem>
                <SelectItem value="Last Month">Last Month</SelectItem>
                <SelectItem value="Last Quarter">Last Quarter</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleGenerateReport}>Generate Report</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Available Reports</CardTitle>
          <CardDescription>View and download generated reports</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell>{report.name}</TableCell>
                  <TableCell>{report.date}</TableCell>
                  <TableCell>{report.type}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

