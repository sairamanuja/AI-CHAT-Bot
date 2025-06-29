"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Users, UserCheck } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login
    setTimeout(() => {
      // Redirect based on the selected tab
      const activeTab = document.querySelector('[data-state="active"]')?.getAttribute("value")
      if (activeTab === "recruiter") {
        window.location.href = "/dashboard"
      } else if (activeTab === "candidate") {
        window.location.href = "/candidate/dashboard"
      }
    }, 1500)
  }

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-card rounded-2xl flex items-center justify-center shadow-lg mb-4">
            <Brain className="w-8 h-8 text-purple-600" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">AutoHireAI</h1>
          <p className="text-purple-100 dark:text-purple-200">Smart Hiring Platform</p>
        </div>

        <Card className="shadow-2xl border-0 bg-card/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold text-foreground">Welcome Back</CardTitle>
            <CardDescription className="text-muted-foreground">Sign in to your account to continue</CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs defaultValue="recruiter" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="recruiter" className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Recruiter
                </TabsTrigger>
                <TabsTrigger value="candidate" className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4" />
                  Candidate
                </TabsTrigger>
              </TabsList>

              <TabsContent value="recruiter">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="recruiter@company.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="••••••••" required />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In as Recruiter"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="candidate">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="candidate-email">Email</Label>
                    <Input id="candidate-email" type="email" placeholder="candidate@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="candidate-password">Password</Label>
                    <Input id="candidate-password" type="password" placeholder="••••••••" required />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In as Candidate"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                {"Don't have an account? "}
                <Link href="/signup" className="text-purple-600 hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
