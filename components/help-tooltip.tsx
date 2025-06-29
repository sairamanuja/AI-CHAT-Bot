"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { KeyboardShortcuts } from "@/components/keyboard-shortcuts"
import { HelpCircle } from "lucide-react"

interface HelpTooltipProps {
  userType: "recruiter" | "candidate"
  onShortcut?: (action: string) => void
}

export function HelpTooltip({ userType, onShortcut }: HelpTooltipProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <HelpCircle className="w-4 h-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="end">
        <KeyboardShortcuts userType={userType} onShortcut={onShortcut} />
      </PopoverContent>
    </Popover>
  )
}
