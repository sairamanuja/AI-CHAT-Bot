"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AdminLayout } from "@/components/admin-layout"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Eye, MessageSquare, Calendar, Star, Users, TrendingUp, Clock } from "lucide-react"

const candidates = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    appliedFor: "Senior Frontend Developer",
    atsScore: 92,
    behavioralScore: 88,
    status: "Interview Scheduled",
    appliedDate: "2024-01-15",
    recruiter: "John Doe",
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@email.com",
    appliedFor: "Backend Engineer",
    atsScore: 88,
    behavioralScore: 91,
    status: "Under Review",
    appliedDate: "2024-01-14",
    recruiter: "Jane Smith",
    avatar: "MC",
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily.davis@email.com",
    appliedFor: "UI/UX Designer",
    atsScore: 95,
    behavioralScore: 89,
    status: "Offer Extended",
    appliedDate: "2024-01-12",
    recruiter: "Mike Johnson",
    avatar: "ED",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Offer Extended":
      return "default"
    case "Interview Scheduled":
      return "secondary"
    case "Under Review":
      return "outline"
    default:
      return "outline"
  }
}

export default function AdminCandidatesPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">All Candidates</h1>
          <p className="text-gray-600 mt-2">Manage all candidate applications across the platform</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Candidates</p>
                  <p className="text-2xl font-bold text-gray-900">8,247</p>
                </div>
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Applications</p>
                  <p className="text-2xl font-bold text-gray-900">1,234</p>
                </div>
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg ATS Score</p>
                  <p className="text-2xl font-bold text-gray-900">87.5</p>
                </div>
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Star className="w-4 h-4 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Reviews</p>
                  <p className="text-2xl font-bold text-gray-900">156</p>
                </div>
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Candidates Table */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>Candidate Applications</CardTitle>
            <CardDescription>All candidate applications across the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Candidate</TableHead>
                  <TableHead>Applied For</TableHead>
                  <TableHead>ATS Score</TableHead>
                  <TableHead>Behavioral Score</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Recruiter</TableHead>
                  <TableHead>Applied Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {candidates.map((candidate) => (
                  <TableRow key={candidate.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={`/placeholder.svg?height=32&width=32`} />
                          <AvatarFallback>{candidate.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-gray-900">{candidate.name}</div>
                          <div className="text-sm text-gray-500">{candidate.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium text-gray-900">{candidate.appliedFor}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{candidate.atsScore}</span>
                        <Progress value={candidate.atsScore} className="w-16" />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{candidate.behavioralScore}</span>
                        <Progress value={candidate.behavioralScore} className="w-16" />
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(candidate.status)}>{candidate.status}</Badge>
                    </TableCell>
                    <TableCell>{candidate.recruiter}</TableCell>
                    <TableCell>{candidate.appliedDate}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Calendar className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MessageSquare className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
