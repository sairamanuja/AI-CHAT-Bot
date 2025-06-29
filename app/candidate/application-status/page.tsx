"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CandidateLayout } from "@/components/candidate-layout"
import { Calendar, Clock, MapPin, Video, Star, CheckCircle, Download } from "lucide-react"

export default function ApplicationStatusPage() {
  return (
    <CandidateLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Application Status</h1>
          <p className="text-gray-600 mt-2">Frontend Developer at TechCorp Inc.</p>
        </div>

        {/* Status Overview */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-blue-50">
          <CardContent className="pt-6">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Interview Scheduled!</h2>
              <p className="text-gray-600 mb-4">
                Congratulations! Your application has been reviewed and you've been selected for an interview.
              </p>
              <Badge variant="default" className="bg-green-100 text-green-700 text-sm px-4 py-2">
                Interview Scheduled
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Scores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                ATS Score
              </CardTitle>
              <CardDescription>Applicant Tracking System evaluation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold text-green-600">92%</div>
                <Progress value={92} className="h-3" />
                <p className="text-sm text-gray-600">
                  Excellent match! Your skills and experience align perfectly with the job requirements.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>Behavioral Assessment</CardTitle>
              <CardDescription>AI-powered personality and communication analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">88%</div>
                  <Progress value={88} className="h-3 mt-2" />
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Confident
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                    Articulate
                  </Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    Team Player
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                    Problem Solver
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Interview Details */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              Interview Details
            </CardTitle>
            <CardDescription>Your upcoming interview information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="font-medium text-gray-900">Date & Time</div>
                    <div className="text-gray-600">Friday, January 26, 2024</div>
                    <div className="text-gray-600">2:00 PM - 3:00 PM PST</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Video className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="font-medium text-gray-900">Interview Type</div>
                    <div className="text-gray-600">Video Call (Zoom)</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="font-medium text-gray-900">Duration</div>
                    <div className="text-gray-600">60 minutes</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="font-medium text-gray-900">Interviewer</div>
                    <div className="text-gray-600">Sarah Chen</div>
                    <div className="text-gray-600">Senior Engineering Manager</div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="font-medium text-blue-900 mb-2">Zoom Meeting Details</div>
                  <div className="text-sm text-blue-800 space-y-1">
                    <div>Meeting ID: 123-456-7890</div>
                    <div>Password: TechCorp2024</div>
                  </div>
                  <Button size="sm" className="mt-3">
                    <Video className="w-4 h-4 mr-2" />
                    Join Zoom Meeting
                  </Button>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h4 className="font-medium text-gray-900 mb-3">Interview Preparation</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border">
                  <CardContent className="p-4 text-center">
                    <Download className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-medium text-gray-900 mb-1">Job Description</div>
                    <div className="text-sm text-gray-600 mb-3">Review the role details</div>
                    <Button variant="outline" size="sm">
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border">
                  <CardContent className="p-4 text-center">
                    <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                    <div className="font-medium text-gray-900 mb-1">Company Info</div>
                    <div className="text-sm text-gray-600 mb-3">Learn about TechCorp</div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border">
                  <CardContent className="p-4 text-center">
                    <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="font-medium text-gray-900 mb-1">Interview Tips</div>
                    <div className="text-sm text-gray-600 mb-3">Preparation guide</div>
                    <Button variant="outline" size="sm">
                      Read Tips
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
            <CardDescription>What to expect after your interview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-blue-600">1</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Complete the interview</div>
                  <div className="text-sm text-gray-600">Show your skills and enthusiasm</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600">2</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Technical assessment (if applicable)</div>
                  <div className="text-sm text-gray-600">You may receive a coding challenge</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600">3</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Final decision</div>
                  <div className="text-sm text-gray-600">We'll notify you within 3-5 business days</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </CandidateLayout>
  )
}
