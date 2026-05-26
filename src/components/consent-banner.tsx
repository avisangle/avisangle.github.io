"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

const STORAGE_KEY = "ga-consent"

type Choice = "granted" | "denied"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function updateConsent(value: Choice) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return
  window.gtag("consent", "update", {
    analytics_storage: value,
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
  })
}

/**
 * Cookie consent banner for Google Analytics (Consent Mode v2).
 * GA defaults to "denied" (see layout.tsx); this lets EU/GDPR visitors opt in.
 * Only rendered in production when analytics is enabled.
 */
export function ConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Choice | null
    if (stored === "granted") {
      updateConsent("granted")
    } else if (stored !== "denied") {
      setVisible(true)
    }
  }, [])

  function handleChoice(value: Choice) {
    localStorage.setItem(STORAGE_KEY, value)
    updateConsent(value)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-6 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/80"
    >
      <div className="container mx-auto flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          This site uses analytics cookies to understand how visitors use it. You can
          accept or decline.
        </p>
        <div className="flex shrink-0 gap-2">
          <Button variant="outline" size="sm" onClick={() => handleChoice("denied")}>
            Decline
          </Button>
          <Button size="sm" onClick={() => handleChoice("granted")}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  )
}
