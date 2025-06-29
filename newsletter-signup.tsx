import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Mail, Github, Chrome, Shield, Heart } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-background to-purple-100 dark:from-purple-950 dark:via-background dark:to-purple-900 flex items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-md">
        <Card className="shadow-xl border-0 bg-card/95 backdrop-blur-sm">
          <CardHeader className="text-center space-y-4 pb-6">
            {/* Brand Logo */}
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg">
              <Mail className="w-8 h-8 text-white" />
            </div>

            <div className="space-y-2">
              <CardTitle className="text-2xl font-bold text-foreground">Subscribe to Our Newsletter</CardTitle>
              <CardDescription className="text-muted-foreground leading-relaxed">
                Get the latest insights, tips, and exclusive content delivered straight to your inbox. Join thousands of
                subscribers!
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Social Sign-up Options */}
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full h-11 border-border hover:bg-accent transition-colors bg-transparent"
                type="button"
              >
                <Chrome className="w-5 h-5 mr-3 text-blue-500" />
                Continue with Google
              </Button>

              <Button
                variant="outline"
                className="w-full h-11 border-border hover:bg-accent transition-colors bg-transparent"
                type="button"
              >
                <Github className="w-5 h-5 mr-3 text-foreground" />
                Continue with GitHub
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground font-medium">Or continue with email</span>
              </div>
            </div>

            {/* Email Form */}
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="h-11 border-border focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full h-11 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Subscribe Now
              </Button>
            </form>

            {/* Additional Links */}
            <div className="text-center space-y-3">
              <div className="flex justify-center space-x-6 text-sm">
                <Link href="/terms" className="text-muted-foreground hover:text-purple-600 transition-colors">
                  Terms
                </Link>
                <Link href="/privacy" className="text-muted-foreground hover:text-purple-600 transition-colors">
                  Privacy
                </Link>
                <Link href="/help" className="text-muted-foreground hover:text-purple-600 transition-colors">
                  Help
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trust Indicators Footer */}
        <div className="mt-6 text-center space-y-3">
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4 text-green-500" />
            <span>We respect your privacy and never share your data</span>
          </div>

          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <Heart className="w-4 h-4 text-red-400" />
            <span>Trusted by 50,000+ subscribers worldwide</span>
          </div>

          <p className="text-xs text-muted-foreground">Unsubscribe at any time. No spam, ever.</p>
        </div>
      </div>
    </div>
  )
}
