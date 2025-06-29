"use client"

import { useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Keyboard, MessageCircle, Search, Plus, Calendar, User } from "lucide-react"

interface KeyboardShortcutsProps {
  userType: "recruiter" | "candidate"
  onShortcut?: (action: string) => void
}

const recruiterShortcuts = [
  { key: "Ctrl + K", action: "search", description: "Quick search", icon: <Search className="w-4 h-4" /> },
  { key: "Ctrl + N", action: "post-job", description: "Post new job", icon: <Plus className="w-4 h-4" /> },
  {
    key: "Ctrl + I",
    action: "schedule-interview",
    description: "Schedule interview",
    icon: <Calendar className="w-4 h-4" />,
  },
  { key: "Ctrl + /", action: "chat", description: "Open AI assistant", icon: <MessageCircle className="w-4 h-4" /> },
]

const candidateShortcuts = [
  { key: "Ctrl + K", action: "search", description: "Search jobs", icon: <Search className="w-4 h-4" /> },
  { key: "Ctrl + P", action: "profile", description: "Edit profile", icon: <User className="w-4 h-4" /> },
  { key: "Ctrl + A", action: "applications", description: "View applications", icon: <Calendar className="w-4 h-4" /> },
  { key: "Ctrl + /", action: "chat", description: "Open AI assistant", icon: <MessageCircle className="w-4 h-4" /> },
]

export function KeyboardShortcuts({ userType, onShortcut }: KeyboardShortcutsProps) {
  const shortcuts = userType === "recruiter" ? recruiterShortcuts : candidateShortcuts

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey) {
        switch (event.key) {
          case "k":
            event.preventDefault()
            onShortcut?.("search")
            break
          case "n":
            if (userType === "recruiter") {
              event.preventDefault()
              onShortcut?.("post-job")
            }
            break
          case "p":
            if (userType === "candidate") {
              event.preventDefault()
              onShortcut?.("profile")
            }
            break
          case "i":
            if (userType === "recruiter") {
              event.preventDefault()
              onShortcut?.("schedule-interview")
            }
            break
          case "a":
            if (userType === "candidate") {
              event.preventDefault()
              onShortcut?.("applications")
            }
            break
          case "/":
            event.preventDefault()
            onShortcut?.("chat")
            break
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [userType, onShortcut])

  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Keyboard className="w-5 h-5" />
          Keyboard Shortcuts
        </CardTitle>
        <CardDescription>Quick actions to boost your productivity</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {shortcuts.map((shortcut, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {shortcut.icon}
              <span className="text-sm">{shortcut.description}</span>
            </div>
            <Badge variant="outline" className="font-mono text-xs">
              {shortcut.key}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
