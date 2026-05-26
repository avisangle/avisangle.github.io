"use client"

import { useEffect, useRef } from "react"

// Kit (ConvertKit) embedded form — values from your form's Embed → JavaScript
// snippet (data-uid + src). Kit injects the form into the container below.
const KIT_UID = "098959edff"
const KIT_SRC = "https://ai-agents-automation-consulting.kit.com/098959edff/index.js"

export function NewsletterSignup() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    // Guard against re-injecting (React StrictMode runs effects twice in dev).
    if (!container || container.querySelector("script")) return

    const script = document.createElement("script")
    script.src = KIT_SRC
    script.async = true
    script.setAttribute("data-uid", KIT_UID)
    container.appendChild(script)
  }, [])

  return (
    <section className="section">
      <div className="container-project flex justify-center">
        <div ref={containerRef} className="kit-newsletter w-full max-w-2xl" />
      </div>
    </section>
  )
}
