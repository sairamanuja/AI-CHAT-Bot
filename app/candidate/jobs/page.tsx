"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { CandidateLayout } from "@/components/candidate-layout"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Briefcase, Clock, Star, Filter, Grid, List } from "lucide-react"

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    skillMatch: 92,
    salary: "$120k - $160k",
    posted: "2 days ago",
    description: "We're looking for a senior frontend developer to join our growing team...",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
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
    description: "Join our innovative startup as a React developer and help build the future...",
    skills: ["React", "JavaScript", "Node.js", "MongoDB"],
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
    description: "We're seeking a full stack engineer to work on cutting-edge projects...",
    skills: ["React", "Node.js", "Python", "AWS"],
    logo: "IL",
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "DesignStudio",
    location: "Los Angeles, CA",
    type: "Contract",
    skillMatch: 90,
    salary: "$80 - $120/hr",
    posted: "5 days ago",
    description: "Creative frontend developer needed for exciting design projects...",
    skills: ["Vue.js", "CSS", "JavaScript", "Figma"],
    logo: "DS",
  },
  {
    id: 5,
    title: "UI/UX Developer",
    company: "WebFlow Co.",
    location: "Austin, TX",
    type: "Full-time",
    skillMatch: 87,
    salary: "$90k - $130k",
    posted: "1 week ago",
    description: "Bridge the gap between design and development in this hybrid role...",
    skills: ["React", "CSS", "Design Systems", "Figma"],
    logo: "WF",
  },
  {
    id: 6,
    title: "JavaScript Developer",
    company: "CodeCraft",
    location: "Seattle, WA",
    type: "Full-time",
    skillMatch: 83,
    salary: "$95k - $135k",
    posted: "4 days ago",
    description: "Join our team of JavaScript experts building scalable applications...",
    skills: ["JavaScript", "Node.js", "Express", "PostgreSQL"],
    logo: "CC",
  },
]

export default function JobBoardPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [locationFilter, setLocationFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesLocation = locationFilter === "all" || job.location.includes(locationFilter)
    const matchesType = typeFilter === "all" || job.type === typeFilter
    return matchesSearch && matchesLocation && matchesType
  })

  return (
    <CandidateLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Job Board</h1>
            <p className="text-gray-600 mt-2">Discover opportunities that match your skills</p>
          </div>
          <div className="flex gap-2">
            <Button variant={viewMode === "grid" ? "default" : "outline"} size="sm" onClick={() => setViewMode("grid")}>
              <Grid className="w-4 h-4" />
            </Button>
            <Button variant={viewMode === "list" ? "default" : "outline"} size="sm" onClick={() => setViewMode("list")}>
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card className="border-0 shadow-md">
          <CardContent className="pt-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search jobs, companies, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="Remote">Remote</SelectItem>
                  <SelectItem value="San Francisco">San Francisco</SelectItem>
                  <SelectItem value="New York">New York</SelectItem>
                  <SelectItem value="Los Angeles">Los Angeles</SelectItem>
                  <SelectItem value="Austin">Austin</SelectItem>
                  <SelectItem value="Seattle">Seattle</SelectItem>
                </SelectContent>
              </Select>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Full-time">Full-time</SelectItem>
                  <SelectItem value="Part-time">Part-time</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                  <SelectItem value="Internship">Internship</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="flex justify-between items-center">
          <p className="text-gray-600">{filteredJobs.length} jobs found</p>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            More Filters
          </Button>
        </div>

        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-medium text-blue-700">{job.logo}</span>
                      </div>
                      <div>
                        <CardTitle className="text-lg">{job.title}</CardTitle>
                        <CardDescription>{job.company}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      <Star className="w-3 h-3 mr-1" />
                      {job.skillMatch}%
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {job.type}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {job.posted}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-2">{job.description}</p>

                  <div className="flex flex-wrap gap-1">
                    {job.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {job.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{job.skills.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">{job.salary}</span>
                      <Button size="sm">Apply Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-medium text-blue-700">{job.logo}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                            <p className="text-gray-600">{job.company}</p>
                          </div>
                          <Badge variant="secondary" className="bg-green-100 text-green-700">
                            <Star className="w-3 h-3 mr-1" />
                            {job.skillMatch}% match
                          </Badge>
                        </div>

                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-1" />
                            {job.type}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {job.posted}
                          </div>
                        </div>

                        <p className="text-gray-600 mt-2 line-clamp-2">{job.description}</p>

                        <div className="flex flex-wrap gap-1 mt-3">
                          {job.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end space-y-2 ml-4">
                      <span className="font-medium text-gray-900">{job.salary}</span>
                      <Button size="sm">Apply Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </CandidateLayout>
  )
}
