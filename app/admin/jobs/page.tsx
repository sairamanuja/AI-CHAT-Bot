"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AdminLayout } from "@/components/admin-layout"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye, Edit, Trash2, Plus, MapPin, Clock, Users } from "lucide-react"

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    status: "Active",
    applications: 45,
    posted: "2024-01-15",
    recruiter: "John Doe",
  },
  {
    id: 2,
    title: "Backend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    status: "Active",
    applications: 32,
    posted: "2024-01-12",
    recruiter: "Jane Smith",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    location: "New York, NY",
    type: "Full-time",
    status: "Paused",
    applications: 28,
    posted: "2024-01-10",
    recruiter: "Mike Johnson",
  },
  {
    id: 4,
    title: "Product Manager",
    department: "Product",
    location: "Austin, TX",
    type: "Full-time",
    status: "Active",
    applications: 67,
    posted: "2024-01-08",
    recruiter: "Sarah Wilson",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
      return "default"
    case "Paused":
      return "secondary"
    case "Closed":
      return "outline"
    default:
      return "outline"
  }
}

export default function AdminJobsPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">All Jobs</h1>
            <p className="text-gray-600 mt-2">Manage all job postings across the platform</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Create Job
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Jobs</p>
                  <p className="text-2xl font-bold text-gray-900">156</p>
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
                  <p className="text-sm font-medium text-gray-600">Active Jobs</p>
                  <p className="text-2xl font-bold text-gray-900">124</p>
                </div>
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Applications</p>
                  <p className="text-2xl font-bold text-gray-900">8,247</p>
                </div>
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Applications</p>
                  <p className="text-2xl font-bold text-gray-900">53</p>
                </div>
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Jobs Table */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>Job Listings</CardTitle>
            <CardDescription>All job postings across departments</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Job Title</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Applications</TableHead>
                  <TableHead>Recruiter</TableHead>
                  <TableHead>Posted</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobs.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell>
                      <div className="font-medium text-gray-900">{job.title}</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{job.department}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                    </TableCell>
                    <TableCell>{job.type}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(job.status)}>{job.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{job.applications}</div>
                    </TableCell>
                    <TableCell>{job.recruiter}</TableCell>
                    <TableCell>{job.posted}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="w-4 h-4" />
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
