"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AdminLayout } from "@/components/admin-layout"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  FunnelChart,
  Funnel,
  LabelList,
} from "recharts"
import { Users, Briefcase, Clock, TrendingUp, TrendingDown, Eye, Download } from "lucide-react"

const hiringFunnelData = [
  { name: "Applications", value: 1000, fill: "#8884d8" },
  { name: "ATS Passed", value: 650, fill: "#82ca9d" },
  { name: "Phone Screen", value: 320, fill: "#ffc658" },
  { name: "Technical Interview", value: 180, fill: "#ff7300" },
  { name: "Final Interview", value: 95, fill: "#00ff00" },
  { name: "Offers Extended", value: 45, fill: "#0088fe" },
  { name: "Offers Accepted", value: 38, fill: "#00C49F" },
]

const monthlyData = [
  { month: "Jan", applications: 850, hires: 32, avgTime: 18 },
  { month: "Feb", applications: 920, hires: 38, avgTime: 16 },
  { month: "Mar", applications: 1100, hires: 45, avgTime: 15 },
  { month: "Apr", applications: 980, hires: 41, avgTime: 17 },
  { month: "May", applications: 1200, hires: 52, avgTime: 14 },
  { month: "Jun", applications: 1350, hires: 58, avgTime: 13 },
]

const departmentData = [
  { name: "Engineering", applications: 450, hires: 28, color: "#8884d8" },
  { name: "Product", applications: 180, hires: 12, color: "#82ca9d" },
  { name: "Design", applications: 120, hires: 8, color: "#ffc658" },
  { name: "Marketing", applications: 95, hires: 6, color: "#ff7300" },
  { name: "Sales", applications: 155, hires: 11, color: "#00ff00" },
]

const atsDropoffData = [
  { stage: "Resume Screen", passed: 65, failed: 35 },
  { stage: "Skills Match", passed: 78, failed: 22 },
  { stage: "Experience Check", passed: 82, failed: 18 },
  { stage: "Education Verify", passed: 91, failed: 9 },
]

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Analytics</h1>
            <p className="text-gray-600 mt-2">Complete hiring funnel insights and performance metrics</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
            <Button variant="outline" size="sm">
              <Eye className="w-4 h-4 mr-2" />
              View Details
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Jobs Posted</CardTitle>
              <Briefcase className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">156</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Candidates</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">8,247</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +18% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Avg Interview Time</CardTitle>
              <Clock className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">13.2 days</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingDown className="h-3 w-3 mr-1" />
                -2.1 days improved
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Conversion Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">3.8%</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +0.4% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Hiring Funnel */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>Hiring Funnel Analysis</CardTitle>
            <CardDescription>Complete candidate journey from application to hire</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <ResponsiveContainer width="100%" height={400}>
                  <FunnelChart>
                    <Tooltip />
                    <Funnel dataKey="value" data={hiringFunnelData} isAnimationActive>
                      <LabelList position="center" fill="#fff" stroke="none" />
                    </Funnel>
                  </FunnelChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Conversion Rates</h4>
                {hiringFunnelData.map((stage, index) => {
                  const nextStage = hiringFunnelData[index + 1]
                  const conversionRate = nextStage ? ((nextStage.value / stage.value) * 100).toFixed(1) : null
                  return (
                    <div key={stage.name} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 rounded" style={{ backgroundColor: stage.fill }} />
                        <span className="font-medium text-gray-900">{stage.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">{stage.value.toLocaleString()}</div>
                        {conversionRate && <div className="text-xs text-gray-500">{conversionRate}% conversion</div>}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>Monthly Application Trends</CardTitle>
              <CardDescription>Applications and hires over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="applications" stroke="#8884d8" name="Applications" />
                  <Line type="monotone" dataKey="hires" stroke="#82ca9d" name="Hires" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>Average Interview Time</CardTitle>
              <CardDescription>Time from application to final decision</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="avgTime" fill="#ffc658" name="Days" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Department Performance */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>Department Performance</CardTitle>
            <CardDescription>Hiring metrics by department</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={departmentData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="applications"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {departmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Department Breakdown</h4>
                {departmentData.map((dept) => (
                  <div key={dept.name} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 rounded" style={{ backgroundColor: dept.color }} />
                      <span className="font-medium text-gray-900">{dept.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">{dept.applications} applications</div>
                      <div className="text-sm text-gray-600">{dept.hires} hires</div>
                      <div className="text-xs text-gray-500">
                        {((dept.hires / dept.applications) * 100).toFixed(1)}% conversion
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ATS Drop-off Analysis */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>ATS Drop-off Analysis</CardTitle>
            <CardDescription>Where candidates are filtered out in the ATS process</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {atsDropoffData.map((stage, index) => (
                <div key={stage.stage} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{stage.stage}</span>
                    <div className="flex items-center space-x-4">
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        {stage.passed}% passed
                      </Badge>
                      <Badge variant="outline" className="text-red-600">
                        {stage.failed}% filtered
                      </Badge>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="h-4 bg-green-500 rounded-l" style={{ width: `${stage.passed}%` }} />
                    <div className="h-4 bg-red-500 rounded-r" style={{ width: `${stage.failed}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest hiring activities across the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 border rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <div className="flex-1">
                  <div className="font-medium text-gray-900">New application received</div>
                  <div className="text-sm text-gray-600">Sarah Johnson applied for Senior Frontend Developer</div>
                </div>
                <div className="text-xs text-gray-500">2 minutes ago</div>
              </div>

              <div className="flex items-center space-x-4 p-3 border rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Interview scheduled</div>
                  <div className="text-sm text-gray-600">Michael Chen - Technical interview on Jan 26</div>
                </div>
                <div className="text-xs text-gray-500">15 minutes ago</div>
              </div>

              <div className="flex items-center space-x-4 p-3 border rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Job posted</div>
                  <div className="text-sm text-gray-600">New Backend Developer position published</div>
                </div>
                <div className="text-xs text-gray-500">1 hour ago</div>
              </div>

              <div className="flex items-center space-x-4 p-3 border rounded-lg">
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Offer accepted</div>
                  <div className="text-sm text-gray-600">Emily Davis accepted the UI/UX Designer offer</div>
                </div>
                <div className="text-xs text-gray-500">3 hours ago</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
