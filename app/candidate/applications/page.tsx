"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CandidateLayout } from "@/components/candidate-layout"
import { Calendar, Eye, Star } from "lucide-react"
import Link from "next/link"

const applications = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "WebFlow Co.",
    status: "Interview Scheduled",
    appliedDate: "2024-01-15",
    atsScore: 89,
    behavioralScore: 85,
    nextStep: "Technical Interview - Jan 26, 2:00 PM",
  },
  {
    id: 2,
    title: "UI/UX Developer",
    company: "DesignHub",
    status: "Under Review",
    appliedDate: "2024-01-12",
    atsScore: 92,
    behavioralScore: 88,
    nextStep: "Waiting for recruiter review",
  },
  {
    id: 3,
    title: "React Developer",
    company: "StartupXYZ",
    status: "Phone Screen",
    appliedDate: "2024-01-10",
    atsScore: 87,
    behavioralScore: 90,
    nextStep: "Phone screen scheduled for Jan 24",
  },
  {
    id: 4,
    title: "Full Stack Engineer",
    company: "TechCorp Inc.",
    status: "Rejected",
    appliedDate: "2024-01-08",
    atsScore: 78,
    behavioralScore: 82,
    nextStep: "Application not selected",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Interview Scheduled":
      return "default"
    case "Phone Screen":
      return "secondary"
    case "Under Review":
      return "outline"
    case "Rejected":
      return "destructive"
    default:
      return "outline"
  }
}

export default function ApplicationsPage() {
  return (
    <CandidateLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Applications</h1>
          <p className="text-gray-600 mt-2">Track the status of your job applications</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app) => (
            <Card key={app.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{app.title}</CardTitle>
                    <CardDescription>{app.company}</CardDescription>
                  </div>
                  <Badge variant={getStatusColor(app.status)}>{app.status}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600">ATS Score</div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="font-medium">{app.atsScore}%</span>
                    </div>
                    <Progress value={app.atsScore} className="mt-1" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Behavioral</div>
                    <div className="font-medium text-gray-900">{app.behavioralScore}%</div>
                    <Progress value={app.behavioralScore} className="mt-1" />
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-600 mb-1">Next Step</div>
                  <p className="text-sm text-gray-900">{app.nextStep}</p>
                </div>

                <div className="flex justify-between items-center pt-2 border-t">
                  <span className="text-sm text-gray-500">Applied {app.appliedDate}</span>
                  <div className="flex space-x-2">
                    <Link href={`/candidate/application-status?id=${app.id}`}>
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </Link>
                    {app.status === "Interview Scheduled" && (
                      <Button size="sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        Details
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </CandidateLayout>
  )
}
