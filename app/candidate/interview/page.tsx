"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CandidateLayout } from "@/components/candidate-layout"
import { Mic, MicOff, RotateCcw, CheckCircle, AlertCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const questions = [
  "Tell me about yourself and your background in frontend development.",
  "Describe a challenging project you've worked on and how you overcame obstacles.",
  "How do you stay updated with the latest web development trends and technologies?",
  "Explain your approach to debugging and problem-solving in your code.",
  "Where do you see yourself in your career five years from now?",
]

export default function VoiceInterviewPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isRecording, setIsRecording] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [behavioralScore, setBehavioralScore] = useState(0)
  const [showRetry, setShowRetry] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRecording) {
      interval = setInterval(() => {
        setTimeElapsed((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRecording])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setTimeElapsed(0)
      setIsRecording(false)
    } else {
      // Simulate interview completion
      const score = Math.floor(Math.random() * 40) + 60 // Random score between 60-100
      setBehavioralScore(score)
      setIsComplete(true)
      if (score < 75) {
        setShowRetry(true)
      }
    }
  }

  const handleRetry = () => {
    setCurrentQuestion(0)
    setTimeElapsed(0)
    setIsRecording(false)
    setIsComplete(false)
    setBehavioralScore(0)
    setShowRetry(false)
  }

  if (showRetry) {
    return (
      <CandidateLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <Card className="w-full max-w-md text-center border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Let's Try Again!</h2>
              <p className="text-gray-600 mb-4">
                Your behavioral score was {behavioralScore}%. Don't worry - practice makes perfect!
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Take a moment to relax, think about your answers, and give it another shot. You've got this!
              </p>
              <div className="space-y-3">
                <Button onClick={handleRetry} className="w-full">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Retry Interview
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Practice Questions
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </CandidateLayout>
    )
  }

  if (isComplete) {
    return (
      <CandidateLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <Card className="w-full max-w-md text-center border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Interview Complete!</h2>
              <p className="text-gray-600 mb-4">Great job! Your responses have been analyzed.</p>

              <div className="space-y-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">{behavioralScore}%</div>
                  <div className="text-sm text-gray-600">Behavioral Score</div>
                  <Progress value={behavioralScore} className="mt-2" />
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Confident</Badge>
                  <Badge variant="secondary">Articulate</Badge>
                  <Badge variant="secondary">Professional</Badge>
                </div>
              </div>

              <Button className="w-full">View Full Results</Button>
            </CardContent>
          </Card>
        </div>
      </CandidateLayout>
    )
  }

  return (
    <CandidateLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Voice Interview</h1>
          <p className="text-gray-600 mt-2">Answer the questions naturally and confidently</p>
        </div>

        {/* Progress */}
        <Card className="border-0 shadow-md">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-600">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium text-gray-600">Time: {formatTime(timeElapsed)}</span>
            </div>
            <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-2" />
          </CardContent>
        </Card>

        {/* AI Bot Avatar */}
        <div className="flex justify-center">
          <div className="relative">
            <Avatar className="h-32 w-32 border-4 border-blue-200">
              <AvatarImage src="/placeholder.svg?height=128&width=128" />
              <AvatarFallback className="text-2xl bg-gradient-to-br from-blue-400 to-purple-500 text-white">
                AI
              </AvatarFallback>
            </Avatar>
            {isRecording && <div className="absolute inset-0 rounded-full border-4 border-red-400 animate-pulse" />}
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* Question Card */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Question {currentQuestion + 1}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed px-4">{questions[currentQuestion]}</p>

              {/* Recording Controls */}
              <div className="flex justify-center space-x-4">
                <Button
                  size="lg"
                  variant={isRecording ? "destructive" : "default"}
                  onClick={() => setIsRecording(!isRecording)}
                  className="w-16 h-16 rounded-full"
                >
                  {isRecording ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                </Button>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500 mb-4">
                  {isRecording ? "Recording your response..." : "Click the microphone to start recording"}
                </p>

                {timeElapsed > 0 && (
                  <Button onClick={handleNextQuestion} disabled={isRecording}>
                    {currentQuestion < questions.length - 1 ? "Next Question" : "Complete Interview"}
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips */}
        <Card className="border-0 shadow-md bg-blue-50">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-blue-900 mb-2">💡 Interview Tips</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Speak clearly and at a moderate pace</li>
              <li>• Take a moment to think before answering</li>
              <li>• Use specific examples from your experience</li>
              <li>• Keep your answers concise but detailed</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </CandidateLayout>
  )
}
