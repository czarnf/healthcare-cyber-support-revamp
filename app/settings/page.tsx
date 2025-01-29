"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/components/ui/use-toast"

export default function SettingsPage() {
  const [username, setUsername] = useState("AdminUser")
  const [email, setEmail] = useState("admin@example.com")
  const [notifications, setNotifications] = useState(true)
  const [twoFactor, setTwoFactor] = useState(false)
  const { toast } = useToast()

  const handleSaveChanges = (e) => {
    e.preventDefault()
    // In a real application, this would update the user's settings
    toast({
      title: "Settings Updated",
      description: "Your changes have been successfully saved.",
    })
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
          <CardDescription>Manage your account preferences</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSaveChanges} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="notifications" checked={notifications} onCheckedChange={setNotifications} />
              <Label htmlFor="notifications">Enable email notifications</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="two-factor" checked={twoFactor} onCheckedChange={setTwoFactor} />
              <Label htmlFor="two-factor">Enable two-factor authentication</Label>
            </div>
            <Button type="submit">Save Changes</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Security</CardTitle>
          <CardDescription>Manage your account security</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input id="confirm-password" type="password" />
            </div>
            <Button>Change Password</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

