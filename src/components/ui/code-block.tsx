"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./button"

export interface CodeBlockProps {
    code: string
    language?: string
    showLineNumbers?: boolean
    filename?: string
    className?: string
}

export function CodeBlock({
    code,
    language,
    showLineNumbers = false,
    filename,
    className,
}: CodeBlockProps) {
    const [copied, setCopied] = React.useState(false)

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className={cn("relative group", className)}>
            {/* Header with language and filename */}
            {(language || filename) && (
                <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-border rounded-t-lg">
                    <div className="flex items-center gap-2">
                        {language && (
                            <span className="text-xs font-medium text-muted-foreground uppercase">
                                {language}
                            </span>
                        )}
                        {filename && (
                            <span className="text-xs text-muted-foreground">{filename}</span>
                        )}
                    </div>
                </div>
            )}

            {/* Code container */}
            <div className="relative">
                <pre className={cn(
                    "bg-muted text-foreground rounded-lg p-4 overflow-x-auto font-mono text-sm border border-border",
                    (language || filename) && "rounded-t-none"
                )}>
                    <code>{code}</code>
                </pre>

                {/* Copy button */}
                <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={handleCopy}
                    aria-label={copied ? "Copied" : "Copy code"}
                >
                    {copied ? (
                        <Check className="h-4 w-4 text-green-500" />
                    ) : (
                        <Copy className="h-4 w-4" />
                    )}
                </Button>
            </div>
        </div>
    )
}
