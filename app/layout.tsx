import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "@/styles/globals.css"
import { RealTimeNotifications } from "@/components/real-time-notifications"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Healthcare Cyber Support",
  description: "Advanced Cybersecurity Management for Healthcare",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
              <div className="mt-8">
                <RealTimeNotifications />
              </div>
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'