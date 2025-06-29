"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Plus, X, Sparkles, CheckCircle } from "lucide-react"

const skillCategories = [
  "JavaScript",
  "Python",
  "React",
  "Node.js",
  "TypeScript",
  "Java",
  "C++",
  "SQL",
  "AWS",
  "Docker",
  "Kubernetes",
  "Git",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "GraphQL",
]

export default function PostJobPage() {
  const [skills, setSkills] = useState<Array<{ name: string; level: number }>>([])
  const [newSkill, setNewSkill] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const addSkill = (skillName: string) => {
    if (skillName && !skills.find((s) => s.name === skillName)) {
      setSkills([...skills, { name: skillName, level: 3 }])
      setNewSkill("")
    }
  }

  const removeSkill = (skillName: string) => {
    setSkills(skills.filter((s) => s.name !== skillName))
  }

  const updateSkillLevel = (skillName: string, level: number) => {
    setSkills(skills.map((s) => (s.name === skillName ? { ...s, level } : s)))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setTimeout(() => setIsSuccess(false), 3000)
    }, 2000)
  }

  if (isSuccess) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <Card className="w-full max-w-md text-center border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Job Posted Successfully!</h2>
              <p className="text-gray-600 mb-6">Your job posting is now live and candidates can start applying.</p>
              <Button onClick={() => setIsSuccess(false)} className="w-full">
                Post Another Job
              </Button>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Post a New Job</h1>
          <p className="text-gray-600 mt-2">Create a detailed job posting to attract the best candidates.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                Job Details
              </CardTitle>
              <CardDescription>Provide basic information about the position</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Job Title</Label>
                  <Input id="title" placeholder="e.g. Senior Frontend Developer" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Input id="department" placeholder="e.g. Engineering" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="e.g. San Francisco, CA" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Employment Type</Label>
                  <Input id="type" placeholder="e.g. Full-time" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Experience Level</Label>
                  <Input id="experience" placeholder="e.g. 3-5 years" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Job Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the role, responsibilities, and what makes this opportunity exciting..."
                  className="min-h-[120px]"
                  required
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>Skill Requirements</CardTitle>
              <CardDescription>Add skills and set proficiency levels (1-5 scale)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {skillCategories.map((skill) => (
                  <Button
                    key={skill}
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => addSkill(skill)}
                    disabled={skills.some((s) => s.name === skill)}
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

              {skills.length > 0 && (
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Required Skills & Proficiency</h4>
                  {skills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-4 p-4 border rounded-lg">
                      <Badge variant="secondary" className="min-w-fit">
                        {skill.name}
                      </Badge>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-600">Proficiency Level</span>
                          <span className="text-sm font-medium">{skill.level}/5</span>
                        </div>
                        <Slider
                          value={[skill.level]}
                          onValueChange={(value) => updateSkillLevel(skill.name, value[0])}
                          max={5}
                          min={1}
                          step={1}
                          className="w-full"
                        />
                      </div>
                      <Button type="button" variant="ghost" size="sm" onClick={() => removeSkill(skill.name)}>
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline">
              Save as Draft
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              {isSubmitting ? "Publishing..." : "Publish Job"}
            </Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  )
}
