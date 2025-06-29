"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CandidateLayout } from "@/components/candidate-layout"
import { Upload, Plus, X, Save, User, FileText, LinkIcon } from "lucide-react"

const skills = ["JavaScript", "React", "TypeScript", "Node.js", "CSS", "HTML", "Git", "MongoDB"]
const currentSkills = ["JavaScript", "React", "TypeScript", "CSS"]

export default function ProfilePage() {
  const [newSkill, setNewSkill] = useState("")
  const [selectedSkills, setSelectedSkills] = useState(currentSkills)

  const addSkill = (skill: string) => {
    if (skill && !selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill])
      setNewSkill("")
    }
  }

  const removeSkill = (skill: string) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill))
  }

  return (
    <CandidateLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
          <p className="text-gray-600 mt-2">Manage your professional profile and preferences</p>
        </div>

        {/* Basic Information */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5 text-blue-600" />
              Basic Information
            </CardTitle>
            <CardDescription>Update your personal and contact information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg?height=96&width=96" />
                <AvatarFallback className="text-xl">SJ</AvatarFallback>
              </Avatar>
              <div>
                <Button variant="outline" size="sm">
                  <Upload className="w-4 h-4 mr-2" />
                  Change Photo
                </Button>
                <p className="text-sm text-gray-500 mt-2">JPG, PNG or GIF. Max size 2MB.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="Sarah" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Johnson" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="sarah.johnson@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" defaultValue="+1 (555) 123-4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" defaultValue="San Francisco, CA" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Professional Title</Label>
                <Input id="title" defaultValue="Frontend Developer" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Professional Summary</Label>
              <Textarea
                id="bio"
                placeholder="Write a brief summary of your professional background and goals..."
                className="min-h-[100px]"
                defaultValue="Passionate frontend developer with 5+ years of experience building modern web applications using React, TypeScript, and modern CSS frameworks."
              />
            </div>
          </CardContent>
        </Card>

        {/* Resume & Documents */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-green-600" />
              Resume & Documents
            </CardTitle>
            <CardDescription>Upload and manage your professional documents</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600 mb-2">Drop your resume here or click to browse</p>
              <Button variant="outline" size="sm">
                Choose File
              </Button>
              <p className="text-xs text-gray-500 mt-2">PDF, DOC, or DOCX. Max size 5MB.</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-gray-900">Sarah_Johnson_Resume.pdf</div>
                    <div className="text-sm text-gray-500">Uploaded 2 days ago • 245 KB</div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    Replace
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>Skills & Technologies</CardTitle>
            <CardDescription>Add your technical skills and expertise</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {skills
                .filter((skill) => !selectedSkills.includes(skill))
                .map((skill) => (
                  <Button
                    key={skill}
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => addSkill(skill)}
                    className="text-xs"
                  >
                    <Plus className="w-3 h-3 mr-1" />
                    {skill}
                  </Button>
                ))}
            </div>

            <div className="flex gap-2">
              <Input
                placeholder="Add custom skill..."
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addSkill(newSkill))}
              />
              <Button type="button" variant="outline" onClick={() => addSkill(newSkill)} disabled={!newSkill}>
                Add
              </Button>
            </div>

            {selectedSkills.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">Your Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSkills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                      {skill}
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeSkill(skill)}
                        className="h-auto p-0 ml-1"
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Portfolio Links */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LinkIcon className="w-5 h-5 text-purple-600" />
              Portfolio & Links
            </CardTitle>
            <CardDescription>Add links to your portfolio, GitHub, LinkedIn, etc.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="portfolio">Portfolio Website</Label>
                <Input id="portfolio" placeholder="https://yourportfolio.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="github">GitHub Profile</Label>
                <Input id="github" placeholder="https://github.com/username" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn Profile</Label>
                <Input id="linkedin" placeholder="https://linkedin.com/in/username" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Personal Website</Label>
                <Input id="website" placeholder="https://yourwebsite.com" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>
    </CandidateLayout>
  )
}
