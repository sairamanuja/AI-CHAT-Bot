"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Eye, Calendar, MessageSquare, Star } from "lucide-react"
import Link from "next/link"

const candidates = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    role: "Senior Frontend Developer",
    atsScore: 92,
    behavioralScore: 88,
    tags: ["Confident", "Team Player", "Innovative"],
    status: "Interview Scheduled",
    appliedDate: "2024-01-15",
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@email.com",
    role: "Full Stack Developer",
    atsScore: 88,
    behavioralScore: 91,
    tags: ["Analytical", "Detail-oriented", "Leadership"],
    status: "Under Review",
    appliedDate: "2024-01-14",
    avatar: "MC",
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily.davis@email.com",
    role: "UI/UX Designer",
    atsScore: 95,
    behavioralScore: 89,
    tags: ["Creative", "Collaborative", "User-focused"],
    status: "Offer Extended",
    appliedDate: "2024-01-12",
    avatar: "ED",
  },
  {
    id: 4,
    name: "David Wilson",
    email: "david.wilson@email.com",
    role: "Backend Developer",
    atsScore: 85,
    behavioralScore: 87,
    tags: ["Problem Solver", "Reliable", "Technical"],
    status: "Phone Screen",
    appliedDate: "2024-01-10",
    avatar: "DW",
  },
  {
    id: 5,
    name: "Lisa Rodriguez",
    email: "lisa.rodriguez@email.com",
    role: "DevOps Engineer",
    atsScore: 90,
    behavioralScore: 85,
    tags: ["Systematic", "Proactive", "Automation-focused"],
    status: "Technical Interview",
    appliedDate: "2024-01-08",
    avatar: "LR",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Offer Extended":
      return "default"
    case "Interview Scheduled":
      return "secondary"
    case "Technical Interview":
      return "secondary"
    case "Phone Screen":
      return "outline"
    case "Under Review":
      return "outline"
    default:
      return "outline"
  }
}

const getScoreColor = (score: number) => {
  if (score >= 90) return "text-green-600"
  if (score >= 80) return "text-blue-600"
  if (score >= 70) return "text-yellow-600"
  return "text-red-600"
}

export default function CandidatesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [viewMode, setViewMode] = useState<"table" | "cards">("table")

  const filteredCandidates = candidates.filter((candidate) => {
    const matchesSearch =
      candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.role.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || candidate.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Candidates</h1>
            <p className="text-gray-600 mt-2">Manage and review candidate applications</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant={viewMode === "table" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("table")}
            >
              Table View
            </Button>
            <Button
              variant={viewMode === "cards" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("cards")}
            >
              Card View
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card className="border-0 shadow-md">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search candidates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="Under Review">Under Review</SelectItem>
                  <SelectItem value="Phone Screen">Phone Screen</SelectItem>
                  <SelectItem value="Technical Interview">Technical Interview</SelectItem>
                  <SelectItem value="Interview Scheduled">Interview Scheduled</SelectItem>
                  <SelectItem value="Offer Extended">Offer Extended</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        {viewMode === "table" ? (
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>Candidate Applications</CardTitle>
              <CardDescription>{filteredCandidates.length} candidates found</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Candidate</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>ATS Score</TableHead>
                    <TableHead>Behavioral</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Applied</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCandidates.map((candidate) => (
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
                        <div className="text-sm text-gray-900">{candidate.role}</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <span className={`font-medium ${getScoreColor(candidate.atsScore)}`}>
                            {candidate.atsScore}
                          </span>
                          <Progress value={candidate.atsScore} className="w-16" />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {candidate.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(candidate.status)}>{candidate.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm text-gray-500">{candidate.appliedDate}</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Link href={`/candidates/${candidate.id}`}>
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </Link>
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
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCandidates.map((candidate) => (
              <Card key={candidate.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                        <AvatarFallback>{candidate.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{candidate.name}</CardTitle>
                        <CardDescription>{candidate.role}</CardDescription>
                      </div>
                    </div>
                    <Badge variant={getStatusColor(candidate.status)}>{candidate.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-600">ATS Score</div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className={`font-medium ${getScoreColor(candidate.atsScore)}`}>{candidate.atsScore}</span>
                      </div>
                      <Progress value={candidate.atsScore} className="mt-1" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Behavioral</div>
                      <div className="font-medium text-gray-900">{candidate.behavioralScore}</div>
                      <Progress value={candidate.behavioralScore} className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-600 mb-2">Traits</div>
                    <div className="flex flex-wrap gap-1">
                      {candidate.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <span className="text-sm text-gray-500">Applied {candidate.appliedDate}</span>
                    <Link href={`/candidates/${candidate.id}`}>
                      <Button size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View Profile
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
