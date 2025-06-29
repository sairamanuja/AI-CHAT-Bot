"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Sparkles,
  FileText,
  Users,
  Calendar,
  Search,
  Settings,
  HelpCircle,
  Minimize2,
  Maximize2,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
  type?: "text" | "quick-action" | "suggestion"
  actions?: QuickAction[]
}

interface QuickAction {
  label: string
  action: string
  icon?: React.ReactNode
}

interface ChatbotProps {
  userType: "recruiter" | "candidate"
}

const recruiterQuickActions: QuickAction[] = [
  { label: "Post New Job", action: "post-job", icon: <FileText className="w-4 h-4" /> },
  { label: "View Candidates", action: "view-candidates", icon: <Users className="w-4 h-4" /> },
  { label: "Schedule Interview", action: "schedule-interview", icon: <Calendar className="w-4 h-4" /> },
  { label: "Analytics Dashboard", action: "analytics", icon: <Search className="w-4 h-4" /> },
]

const candidateQuickActions: QuickAction[] = [
  { label: "Find Jobs", action: "find-jobs", icon: <Search className="w-4 h-4" /> },
  { label: "Update Profile", action: "update-profile", icon: <User className="w-4 h-4" /> },
  { label: "Interview Prep", action: "interview-prep", icon: <Calendar className="w-4 h-4" /> },
  { label: "Application Status", action: "application-status", icon: <FileText className="w-4 h-4" /> },
]

const recruiterSuggestions = [
  "How do I create an effective job posting?",
  "What's the average time to hire?",
  "How can I improve candidate screening?",
  "Show me top performing job posts",
  "Help me schedule bulk interviews",
]

const candidateSuggestions = [
  "How do I improve my ATS score?",
  "What should I include in my profile?",
  "How to prepare for voice interviews?",
  "When will I hear back from employers?",
  "Help me find remote opportunities",
]

export function Chatbot({ userType }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const quickActions = userType === "recruiter" ? recruiterQuickActions : candidateQuickActions
  const suggestions = userType === "recruiter" ? recruiterSuggestions : candidateSuggestions

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus()
    }
  }, [isOpen, isMinimized])

  const addMessage = (
    content: string,
    sender: "user" | "bot",
    type: "text" | "quick-action" | "suggestion" = "text",
    actions?: QuickAction[],
  ) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender,
      timestamp: new Date(),
      type,
      actions,
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage = inputValue.trim()
    setInputValue("")
    addMessage(userMessage, "user")

    // Simulate typing
    setIsTyping(true)

    setTimeout(
      () => {
        setIsTyping(false)
        handleBotResponse(userMessage)
      },
      1000 + Math.random() * 1000,
    )
  }

  const handleBotResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase()

    // Context-aware responses based on user type and message content
    if (userType === "recruiter") {
      if (lowerMessage.includes("job") || lowerMessage.includes("post")) {
        addMessage(
          "I can help you create an effective job posting! Here are some quick actions:",
          "bot",
          "quick-action",
          [
            { label: "Create Job Post", action: "post-job", icon: <FileText className="w-4 h-4" /> },
            { label: "View Templates", action: "job-templates", icon: <Sparkles className="w-4 h-4" /> },
            { label: "Best Practices", action: "job-tips", icon: <HelpCircle className="w-4 h-4" /> },
          ],
        )
      } else if (lowerMessage.includes("candidate") || lowerMessage.includes("applicant")) {
        addMessage("Let me help you manage candidates effectively:", "bot", "quick-action", [
          { label: "View All Candidates", action: "view-candidates", icon: <Users className="w-4 h-4" /> },
          { label: "Top Matches", action: "top-matches", icon: <Sparkles className="w-4 h-4" /> },
          { label: "Schedule Interviews", action: "schedule-interview", icon: <Calendar className="w-4 h-4" /> },
        ])
      } else if (lowerMessage.includes("interview") || lowerMessage.includes("schedule")) {
        addMessage(
          "I'll help you streamline your interview process. The average time to schedule is 3-5 days. Would you like me to:",
          "bot",
          "quick-action",
          [
            { label: "Schedule Interview", action: "schedule-interview", icon: <Calendar className="w-4 h-4" /> },
            { label: "Interview Templates", action: "interview-templates", icon: <FileText className="w-4 h-4" /> },
            { label: "Bulk Scheduling", action: "bulk-schedule", icon: <Users className="w-4 h-4" /> },
          ],
        )
      } else if (lowerMessage.includes("analytics") || lowerMessage.includes("report")) {
        addMessage(
          "Here's a quick overview: You have 12 active jobs with 348 total applicants. Average ATS score is 87.5%. Would you like detailed analytics?",
          "bot",
          "quick-action",
          [
            { label: "Full Analytics", action: "analytics", icon: <Search className="w-4 h-4" /> },
            { label: "Export Report", action: "export-report", icon: <FileText className="w-4 h-4" /> },
          ],
        )
      } else {
        addMessage(
          "I'm here to help with your recruiting needs! I can assist with job postings, candidate management, interview scheduling, and analytics. What would you like to do?",
          "bot",
          "suggestion",
        )
      }
    } else {
      // Candidate responses
      if (lowerMessage.includes("job") || lowerMessage.includes("search")) {
        addMessage("I found 67 jobs matching your profile! Here's what I can help you with:", "bot", "quick-action", [
          { label: "Browse Jobs", action: "find-jobs", icon: <Search className="w-4 h-4" /> },
          { label: "Job Recommendations", action: "job-recommendations", icon: <Sparkles className="w-4 h-4" /> },
          { label: "Set Job Alerts", action: "job-alerts", icon: <Settings className="w-4 h-4" /> },
        ])
      } else if (lowerMessage.includes("profile") || lowerMessage.includes("resume")) {
        addMessage("Your profile is 85% complete. Let me help you optimize it:", "bot", "quick-action", [
          { label: "Update Profile", action: "update-profile", icon: <User className="w-4 h-4" /> },
          { label: "Upload Resume", action: "upload-resume", icon: <FileText className="w-4 h-4" /> },
          { label: "Profile Tips", action: "profile-tips", icon: <HelpCircle className="w-4 h-4" /> },
        ])
      } else if (lowerMessage.includes("interview") || lowerMessage.includes("prep")) {
        addMessage(
          "Great! Interview preparation is key to success. Your next interview is scheduled for Jan 26. Let me help:",
          "bot",
          "quick-action",
          [
            { label: "Interview Prep", action: "interview-prep", icon: <Calendar className="w-4 h-4" /> },
            { label: "Practice Questions", action: "practice-questions", icon: <HelpCircle className="w-4 h-4" /> },
            { label: "Voice Interview", action: "voice-interview", icon: <Sparkles className="w-4 h-4" /> },
          ],
        )
      } else if (lowerMessage.includes("application") || lowerMessage.includes("status")) {
        addMessage(
          "You have 12 active applications. 3 interviews scheduled, 1 offer pending! Here's what you can do:",
          "bot",
          "quick-action",
          [
            { label: "Application Status", action: "application-status", icon: <FileText className="w-4 h-4" /> },
            { label: "Interview Schedule", action: "interview-schedule", icon: <Calendar className="w-4 h-4" /> },
          ],
        )
      } else if (lowerMessage.includes("ats") || lowerMessage.includes("score")) {
        addMessage(
          "Your average ATS score is 89% - that's excellent! Here are ways to maintain and improve it:",
          "bot",
          "quick-action",
          [
            { label: "ATS Tips", action: "ats-tips", icon: <HelpCircle className="w-4 h-4" /> },
            { label: "Keyword Optimization", action: "keyword-optimization", icon: <Sparkles className="w-4 h-4" /> },
            { label: "Profile Review", action: "profile-review", icon: <User className="w-4 h-4" /> },
          ],
        )
      } else {
        addMessage(
          "I'm your personal career assistant! I can help you find jobs, optimize your profile, prepare for interviews, and track applications. What would you like to work on?",
          "bot",
          "suggestion",
        )
      }
    }
  }

  const handleQuickAction = (action: string) => {
    addMessage(`Help me with: ${action.replace("-", " ")}`, "user")

    setTimeout(() => {
      setIsTyping(false)

      // Handle specific actions
      switch (action) {
        case "post-job":
          addMessage(
            "I'll guide you through creating an effective job post. Let's start with the basics - what position are you hiring for?",
            "bot",
          )
          break
        case "find-jobs":
          addMessage(
            "I found 23 new jobs that match your skills! Would you like me to show you the top matches or help you refine your search criteria?",
            "bot",
          )
          break
        case "schedule-interview":
          addMessage(
            "I can help you schedule interviews efficiently. Do you want to schedule a single interview or set up bulk scheduling for multiple candidates?",
            "bot",
          )
          break
        case "interview-prep":
          addMessage(
            "Let's get you ready! I recommend practicing with our AI voice interview first. It will help you get comfortable and improve your confidence.",
            "bot",
          )
          break
        default:
          addMessage(
            `I'm setting that up for you now. This feature will help streamline your ${action.replace("-", " ")} process.`,
            "bot",
          )
      }
    }, 800)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion)
    setTimeout(() => {
      handleSendMessage()
    }, 100)
  }

  const initializeChat = () => {
    if (messages.length === 0) {
      const welcomeMessage =
        userType === "recruiter"
          ? "Hi! I'm your AI recruiting assistant. I can help you post jobs, manage candidates, schedule interviews, and analyze your hiring metrics. How can I assist you today?"
          : "Hello! I'm your personal career assistant. I can help you find jobs, optimize your profile, prepare for interviews, and track your applications. What would you like to work on?"

      setTimeout(() => {
        addMessage(welcomeMessage, "bot")

        setTimeout(() => {
          addMessage("Here are some quick actions to get you started:", "bot", "quick-action", quickActions)
        }, 1000)
      }, 500)
    }
  }

  useEffect(() => {
    if (isOpen) {
      initializeChat()
    }
  }, [isOpen])

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:scale-110 transition-all duration-200"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </Button>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
      </div>
    )
  }

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-300",
        isMinimized ? "w-80 h-16" : "w-96 h-[600px]",
      )}
    >
      <Card className="h-full shadow-2xl border-0 bg-card/95 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg">AI Assistant</CardTitle>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-xs text-muted-foreground">Online</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={() => setIsMinimized(!isMinimized)}>
              {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="flex flex-col h-full p-0">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn("flex", message.sender === "user" ? "justify-end" : "justify-start")}
                  >
                    <div
                      className={cn(
                        "flex items-start space-x-2 max-w-[80%]",
                        message.sender === "user" ? "flex-row-reverse space-x-reverse" : "",
                      )}
                    >
                      <Avatar className="w-8 h-8">
                        {message.sender === "bot" ? (
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                            <Bot className="w-4 h-4 text-white" />
                          </div>
                        ) : (
                          <>
                            <AvatarImage src="/placeholder.svg?height=32&width=32" />
                            <AvatarFallback>
                              <User className="w-4 h-4" />
                            </AvatarFallback>
                          </>
                        )}
                      </Avatar>
                      <div className="space-y-2">
                        <div
                          className={cn(
                            "rounded-lg px-3 py-2 text-sm",
                            message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted",
                          )}
                        >
                          {message.content}
                        </div>

                        {message.type === "quick-action" && message.actions && (
                          <div className="flex flex-wrap gap-2">
                            {message.actions.map((action, index) => (
                              <Button
                                key={index}
                                variant="outline"
                                size="sm"
                                onClick={() => handleQuickAction(action.action)}
                                className="text-xs"
                              >
                                {action.icon}
                                {action.label}
                              </Button>
                            ))}
                          </div>
                        )}

                        {message.type === "suggestion" && (
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">Try asking:</p>
                            <div className="space-y-1">
                              {suggestions.slice(0, 3).map((suggestion, index) => (
                                <button
                                  key={index}
                                  onClick={() => handleSuggestionClick(suggestion)}
                                  className="block text-xs text-left text-primary hover:underline"
                                >
                                  • {suggestion}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-2">
                      <Avatar className="w-8 h-8">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                      </Avatar>
                      <div className="bg-muted rounded-lg px-3 py-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                          <div
                            className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          />
                          <div
                            className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            <div className="border-t p-4">
              <div className="flex space-x-2">
                <Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything..."
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} disabled={!inputValue.trim()}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-1 mt-2">
                {quickActions.slice(0, 2).map((action, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="cursor-pointer hover:bg-secondary/80 text-xs"
                    onClick={() => handleQuickAction(action.action)}
                  >
                    {action.icon}
                    {action.label}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  )
}
