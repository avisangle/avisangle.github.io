"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Loader2 } from "lucide-react"

// Kit (ConvertKit) form UID — from your form's embed snippet (data-uid).
// We post directly to Kit's CORS-enabled subscription endpoint, so the form
// is fully styled with the site's own components.
const KIT_FORM_UID = "098959edff"

type Status = "idle" | "loading" | "success" | "error"

export function NewsletterSignup() {
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("loading")
    setError("")

    const formData = new FormData(event.currentTarget)
    const email_address = formData.get("email_address")

    try {
      const res = await fetch(`https://app.kit.com/forms/${KIT_FORM_UID}/subscriptions`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email_address }),
      })
      if (res.ok) {
        setStatus("success")
      } else {
        setStatus("error")
        setError("Something went wrong. Please try again.")
      }
    } catch {
      setStatus("error")
      setError("Network error. Please check your connection and try again.")
    }
  }

  return (
    <section className="section">
      <div className="container-project">
        <div className="rounded-xl border border-border bg-card p-6 sm:p-8 text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-2">Get new posts in your inbox</h3>
          <p className="text-muted-foreground mb-6">
            Practical guides on AI agents, automation, and DevOps. No spam — unsubscribe anytime.
          </p>

          {status === "success" ? (
            <div className="flex items-center justify-center gap-2 text-green-600">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-medium">Thanks! Please check your inbox to confirm.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
            >
              <Input
                type="email"
                name="email_address"
                placeholder="you@example.com"
                required
                disabled={status === "loading"}
                className="sm:max-w-xs"
                aria-label="Email address"
              />
              <Button type="submit" disabled={status === "loading"}>
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>
          )}

          {status === "error" && <p className="mt-3 text-sm text-destructive">{error}</p>}
        </div>
      </div>
    </section>
  )
}
