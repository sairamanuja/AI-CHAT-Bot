"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CandidateLayout } from "@/components/candidate-layout"
import { FileText, Star, Briefcase, Clock, MapPin, Building, ArrowRight, Upload, Eye } from "lucide-react"
import Link from "next/link"

const recommendedJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    skillMatch: 92,
    salary: "$120k - $160k",
    posted: "2 days ago",
    logo: "TC",
  },
  {
    id: 2,
    title: "React Developer",
    company: "StartupXYZ",
    location: "Remote",
    type: "Full-time",
    skillMatch: 88,
    salary: "$100k - $140k",
    posted: "1 week ago",
    logo: "SX",
  },
  {
    id: 3,
    title: "Full Stack Engineer",
    company: "InnovateLabs",
    location: "New York, NY",
    type: "Full-time",
    skillMatch: 85,
    salary: "$110k - $150k",
    posted: "3 days ago",
    logo: "IL",
  },
]

const recentApplications = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "WebFlow Co.",
    status: "Interview Scheduled",
    appliedDate: "2024-01-15",
    atsScore: 89,
  },
  {
    id: 2,
    title: "UI/UX Developer",
    company: "DesignHub",
    status: "Under Review",
    appliedDate: "2024-01-12",
    atsScore: 92,
  },
]

export default function CandidateDashboard() {
  return (
    <CandidateLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Sarah!</h1>
          <p className="text-gray-600 mt-2">Here's your job search progress and recommendations.</p>
        </div>

        {/* Profile Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-600" />
                Profile Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder.svg?height=64&width=64" />
                  <AvatarFallback className="text-lg">SJ</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">Sarah Johnson</h3>
                  <p className="text-gray-600">Frontend Developer</p>
                  <p className="text-sm text-gray-500">San Francisco, CA</p>
                </div>
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">12</div>
                  <div className="text-sm text-gray-600">Applications Sent</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">3</div>
                  <div className="text-sm text-gray-600">Interviews Scheduled</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">89%</div>
                  <div className="text-sm text-gray-600">Avg ATS Score</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Resume Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Profile Completeness</span>
                <span className="text-sm font-medium">85%</span>
              </div>
              <Progress value={85} className="h-2" />

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Resume Uploaded</span>
                  <Badge variant="default" className="bg-green-100 text-green-700">
                    Complete
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Skills Listed</span>
                  <Badge variant="default" className="bg-green-100 text-green-700">
                    Complete
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Portfolio Links</span>
                  <Badge variant="outline">Pending</Badge>
                </div>
              </div>

              <Button className="w-full mt-4 bg-transparent" variant="outline">
                <Upload className="w-4 h-4 mr-2" />
                Update Resume
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recommended Jobs */}
        <Card className="border-0 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Recommended Jobs
              </CardTitle>
              <CardDescription>Jobs that match your skills and preferences</CardDescription>
            </div>
            <Link href="/candidate/jobs">
              <Button variant="outline" size="sm">
                View All Jobs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendedJobs.map((job) => (
                <Card key={job.id} className="border hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <span className="text-sm font-medium text-purple-700">{job.logo}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm">{job.title}</h4>
                          <p className="text-xs text-gray-600">{job.company}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                        {job.skillMatch}% match
                      </Badge>
                    </div>

                    <div className="space-y-2 text-xs text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="w-3 h-3 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {job.posted}
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">{job.salary}</span>
                        <Button size="sm" className="text-xs">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Applications */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-600" />
              Recent Applications
            </CardTitle>
            <CardDescription>Track your application status and progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentApplications.map((app) => (
                <div key={app.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Building className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{app.title}</h4>
                      <p className="text-sm text-gray-600">{app.company}</p>
                      <p className="text-xs text-gray-500">Applied {app.appliedDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">ATS Score: {app.atsScore}</div>
                      <Progress value={app.atsScore} className="w-20 mt-1" />
                    </div>
                    <Badge variant={app.status === "Interview Scheduled" ? "default" : "outline"}>{app.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </CandidateLayout>
  )
}
