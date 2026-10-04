import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Breadcrumb } from "@/components/breadcrumb"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"
import { RelatedPosts } from "@/components/related-posts"
import { PostNavigation } from "@/components/post-navigation"

const SLUG = "rules-vs-llm-dictation-cleanup"
const POST_URL = `https://avinashsangle.com/blog/${SLUG}`
const OG_IMAGE = `https://avinashsangle.com/og-${SLUG}.png`
const HEADLINE = "Rules vs LLM for Dictation Cleanup: What I Measured on My Speech"
const DESCRIPTION =
  "I built a Mac dictation app, hand-checked my own dictations, and compared offline rules to two cloud LLMs. On everyday speech the rules won."
const PUBLISHED = "2026-10-04"

export const metadata: Metadata = {
  // 41 chars: the layout template adds 17, so the rendered title is 58
  title: "Rules vs LLM for Dictation Cleanup Tested",
  description: DESCRIPTION,
  keywords: [
    "dictation cleanup",
    "rules vs LLM",
    "Mac dictation app",
    "on-device dictation",
    "LLM vs rules",
    "skip LLM calls to save tokens",
    "offline dictation cleanup",
    "speech to text cleanup",
    "Parakeet CoreML",
    "Roundhand",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: HEADLINE,
    description: DESCRIPTION,
    url: POST_URL,
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: `${PUBLISHED}T00:00:00.000Z`,
    modifiedTime: `${PUBLISHED}T00:00:00.000Z`,
    authors: ["Avinash Sangle"],
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Rules vs LLM for dictation cleanup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HEADLINE,
    description: DESCRIPTION,
    creator: "@avi_sangle",
    images: [OG_IMAGE],
  },
  alternates: { canonical: POST_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const faqs = [
  {
    q: "Does Roundhand send my audio to the cloud?",
    a: "Speech is recognised on your Mac. Your audio is never uploaded or saved to disk. If you turn on cloud cleanup, the transcript text, never the audio, goes to the language model provider. In the default mode, after the one-time model download, dictation and cleanup run on your Mac, apart from update checks.",
  },
  {
    q: "Is rules-based cleanup better than an LLM?",
    a: "On my own hand-checked everyday dictations, the rules did better than both cloud LLMs I tested. The LLMs came out ahead on edge cases. It is one person's dataset, so treat it as a direction and test your own speech.",
  },
  {
    q: "Which Macs does it run on?",
    a: "Apple silicon Macs on macOS 14 or later. A Windows version is in development.",
  },
  {
    q: "Is it free?",
    a: "Download is free with no account needed, and dictation with the offline cleanup stays free. See the pricing page for what the optional cloud cleanup adds.",
  },
  {
    q: "Will it type into password fields?",
    a: "No. It will not read or type into password fields.",
  },
  {
    q: "Is it open source?",
    a: "No.",
  },
]

const techArticleSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: HEADLINE,
  description: DESCRIPTION,
  image: OG_IMAGE,
  author: {
    "@type": "Person",
    name: "Avinash Sangle",
    url: "https://avinashsangle.com",
    jobTitle: "Claude Code & AI Automation Expert",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com/in/avinashsangle",
      "https://x.com/avi_sangle",
      "https://github.com/avisangle",
    ],
    knowsAbout: ["Claude Code", "AI Automation", "Model Context Protocol", "DevOps", "Generative AI"],
  },
  publisher: { "@type": "Person", name: "Avinash Sangle", url: "https://avinashsangle.com" },
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  mainEntityOfPage: { "@type": "WebPage", "@id": POST_URL },
  keywords:
    "dictation cleanup, rules vs LLM, Mac dictation app, on-device dictation, skip LLM calls to save tokens",
  articleSection: "AI Development",
  wordCount: 1750,
})

const breadcrumbSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://avinashsangle.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://avinashsangle.com/blog" },
    { "@type": "ListItem", position: 3, name: "Rules vs LLM for Dictation Cleanup", item: POST_URL },
  ],
})

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
})

const toc = [
  ["raw-speech-to-text", "The problem with raw speech-to-text"],
  ["what-i-built", "What I built"],
  ["two-ways-to-clean-up", "Two ways to do dictation cleanup"],
  ["the-measurement", "Rules vs LLM: the measurement"],
  ["the-gate", "How the gate works (the cost angle)"],
  ["spoken-ticket-keys", "A smaller example of the same instinct"],
  ["takeaways", "What I would take from this"],
  ["faq", "FAQ"],
  ["try-roundhand", "Try Roundhand"],
]

export default function RulesVsLlmDictationCleanupPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: techArticleSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <div className="container-project py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Rules vs LLM for Dictation Cleanup" },
          ]}
        />

        {/* Article Header */}
        <header className="mb-12">
          <Badge className="mb-4">AI Development</Badge>
          <h1 className="text-4xl font-bold mb-4 leading-tight">{HEADLINE}</h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            I built{" "}
            <a href="https://roundhand.dev" className="project-link">
              Roundhand
            </a>
            , a Mac dictation app. This post is about one decision in it.
          </p>
          <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Calendar" size="sm" /> October 4, 2026
            </span>
            <span>-</span>
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Clock" size="sm" /> 8 min read
            </span>
            <span>-</span>
            <span>Last updated: {PUBLISHED}</span>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {["Dictation Cleanup", "Mac Dictation App", "On-Device", "LLM vs Rules", "Token Cost"].map(
              (tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              )
            )}
          </div>
        </header>

        {/* Table of Contents */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CategoryIcon icon="List" size="sm" />
              Table of Contents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <nav>
              <ol className="space-y-2">
                {toc.map(([id, label]) => (
                  <li key={id}>
                    <a href={`#${id}`} className="project-link">
                      {label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </CardContent>
        </Card>

        {/* TL;DR */}
        <Card className="card-accent-left mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CategoryIcon icon="Zap" size="sm" />
              TL;DR
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="skill-list">
              <li>
                On my own hand-checked dictations, offline rules did better than two cloud LLMs on
                everyday speech. The LLMs only came out ahead on edge cases.
              </li>
              <li>
                In a sample of 146 LLM cleanup calls, 50 returned exactly what the rules had already
                produced. That is about a third of the calls.
              </li>
              <li>
                Roundhand skips the LLM for transcripts under 6 words by default. In that corpus,
                11 of the 14 calls the gate would skip were redundant.
              </li>
              <li>
                Free offline cleanup is the default. Cloud cleanup is an optional extra.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 1 */}
        <section id="raw-speech-to-text" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="AudioLines" size="md" />
            The problem with raw speech-to-text
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Speech recognition gives you what you said, not what you meant. A real dictation looks
            like this:
          </p>

          <blockquote className="border-l-4 border-border pl-4 mb-6 text-lg italic text-muted-foreground">
            um so move the call to Tuesday scratch that to Wednesday and let Sam know
          </blockquote>

          <p className="text-lg leading-relaxed mb-6">
            What you wanted to land in the message is &quot;Move the call to Wednesday and let Sam
            know.&quot; Between those two strings sit filler words, a restarted sentence and
            missing capitals and punctuation. Someone has to fix that, and if it is you, you have
            not saved much time over typing.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The usual fix in 2026 is to hand the transcript to a language model and ask it to tidy
            up. I assumed that would be better than anything I could write by hand. I built both
            paths into Roundhand, then measured them instead of trusting the assumption.
          </p>
        </section>

        {/* Section 2 */}
        <section id="what-i-built" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Mic" size="md" />
            What I built
          </h2>

          <div className="mx-auto mb-8 w-full max-w-2xl">
            <div className="aspect-video overflow-hidden rounded-2xl border border-border">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/DUsTHgtK1wI"
                title="Roundhand 60-second demo: dictation landing in Slack, Mail and Notes"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Roundhand is a menu-bar dictation app for Apple silicon Macs. You hold a key, talk,
            let go, and the text lands at your cursor. It writes for the app that has focus: a
            short message in Slack, a greeting and a sign-off on their own lines in Mail, a list in
            Notes, one line with no trailing full stop in a terminal.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            Two things happen between your voice and the text field:
          </p>

          <ol className="list-decimal pl-6 space-y-3 mb-6 text-lg leading-relaxed">
            <li>
              Recognition. NVIDIA&apos;s Parakeet model turns audio into a transcript. This runs on
              your Mac, on the Neural Engine, through CoreML. Speech is recognised on your Mac. Your
              audio is never uploaded or saved to disk.
            </li>
            <li>
              Cleanup. The transcript is cleaned and shaped for the destination app. This is the
              step the rest of this post is about.
            </li>
          </ol>

          <Card className="card-accent-left">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed">
                Try it. Roundhand is free to download, with no account needed. It needs an Apple
                silicon Mac on macOS 14 or later.{" "}
                <a href="https://roundhand.dev" className="project-link">
                  Download Roundhand for Mac
                </a>
                .
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Section 3 */}
        <section id="two-ways-to-clean-up" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="GitCompare" size="md" />
            Two ways to do dictation cleanup
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Rules. A set of deterministic rules that run on the Mac. They drop fillers like
            &quot;um&quot; and &quot;uh&quot;, keep the version you meant when you restart a
            sentence (&quot;Tuesday, scratch that, Wednesday&quot; becomes Wednesday), and fix
            capitals and punctuation. No network, no cost per use, and the same input always
            produces the same output.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            An LLM. The transcript text, never the audio, goes to a language model that rewrites it
            more freely. It can restructure a rambling sentence in a way fixed rules cannot. It
            costs tokens and a network round trip on every call, and it can change your wording in
            ways you did not ask for.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            I expected the LLM to win. It is the more capable tool.
          </p>
        </section>

        {/* Section 4 */}
        <section id="the-measurement" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Ruler" size="md" />
            Rules vs LLM: the measurement
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            I hand-annotated a set of my own real dictations: what I said, and what I wanted
            written. Then I scored the offline rules and two cloud LLMs against those references.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The result: on everyday dictation, the rules did better than both LLMs. The LLMs only
            came out ahead on edge cases.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Two honest limits on that. The set is my own speech, so it reflects how I talk, not how
            everyone talks. And I am reporting the direction of the result, not a headline accuracy
            number, because I have not published a benchmark and will not invent one. If your
            dictation is mostly long, rambling prose, your results may differ.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Why would rules win on ordinary speech? A language model is free to be creative, and
            creativity is a defect when the job is to write down what someone said. Rules do the
            narrow job and stop. The failure mode of a rule is leaving a small thing unfixed. The
            failure mode of a model is changing a word you meant.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            So the free, offline cleanup is the default in Roundhand. It is not a fallback. Cloud
            cleanup is an optional extra for people who want freer rewording, either on a managed
            plan or with your own API key. Pricing details are on the{" "}
            <a href="https://roundhand.dev/pricing" className="project-link">
              pricing page
            </a>
            ; dictation and the offline cleanup are free with no time or word limit.
          </p>
        </section>

        {/* Section 5 */}
        <section id="the-gate" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Filter" size="md" />
            How the gate works (the cost angle)
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            If you do turn cloud cleanup on, there is a second question: should every dictation
            make the round trip?
          </p>

          <p className="text-lg leading-relaxed mb-6">
            I measured that too. Across the set of real LLM calls I examined, 50 of 146 returned
            exactly what the offline rules had already produced. That is about a third of the
            calls. In that sample those 50 calls cost 63 seconds of wall-clock time and 16 thousand
            input tokens for an answer the app already had before it asked.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            You cannot tell in advance which calls will be redundant. But you can find where they
            cluster, and it is short utterances. So Roundhand has a gate in front of the LLM call.
            Under the default setting, a transcript of fewer than 6 words skips the model and uses
            the rules output directly. In that corpus, 11 of the 14 calls the gate would skip
            returned an answer the rules already had.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Counting words is deliberately unclever. My first design was richer: call the LLM if the
            transcript had several sentences, or was long enough, or if the rules had made a
            substantive edit. When I measured it, the &quot;rules made an edit&quot; clause carried
            no signal. The LLM&apos;s answer was redundant 30% of the time when the rules had
            changed the word sequence, and 35% of the time when they had not. A condition that does
            not separate the two cases is not worth the code, so it went. Length was the only
            clause that held up.
          </p>

          <p className="text-lg leading-relaxed mb-4">Two details that matter in practice:</p>

          <ul className="skill-list mb-6 text-lg leading-relaxed">
            <li>
              The gate counts what you said, not what the rules produced. If the numeral pass
              shortens &quot;or twenty one&quot; into &quot;or-21&quot;, the text gets shorter than
              what you spoke. Counting the shortened text could deny a real sentence its cleanup for
              a word it never dropped. So the gate counts words in the raw transcript.
            </li>
            <li>
              A flag, a path or a dotted identifier counts as one word. That keeps a short terminal
              command short, which is how the speaker thinks of it.
            </li>
          </ul>

          <p className="text-lg leading-relaxed mb-6">
            The gate decides whether to call the model, never what the model returns. A dictation
            that passes the gate produces exactly what it would have without one.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The threshold is 6 because the measurement supported 6. Raising it would skip more
            calls and also start changing output on calls I have no way to judge yet. I would
            rather wait for a bigger reference set than argue for a number.
          </p>
        </section>

        {/* Section 6 */}
        <section id="spoken-ticket-keys" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Hash" size="md" />
            A smaller example of the same instinct
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Developers dictate ticket keys. Speech recognition turns &quot;OR 21&quot; into
            &quot;or twenty one&quot;, which is useless in a commit message. Roundhand has a narrow
            rule: when a spoken number from zero to 999 comes right after the word &quot;or&quot;,
            it becomes digits, so &quot;or twenty one&quot; is written &quot;or-21&quot;. A bare
            number in ordinary prose is left alone. It is a few dozen lines of code, no model, and
            it never guesses.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            That is the pattern I keep landing on. If the job is well defined, write the rule. Use
            the model where the rules run out.
          </p>
        </section>

        {/* Section 7 */}
        <section id="takeaways" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Lightbulb" size="md" />
            What I would take from this
          </h2>

          <ul className="skill-list text-lg leading-relaxed">
            <li>
              Measure the model against the boring baseline. I would not have found that the
              baseline was better if I had shipped the LLM path on faith.
            </li>
            <li>
              Gate expensive calls on a cheap signal. One measured clause beat three plausible
              ones.
            </li>
            <li>
              Keep the default free and local when it is also the better option. That turned out to
              be the case here, and it is a good place for a default to be.
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="MessageCircleQuestion" size="md" />
            FAQ
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i + 1}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Closing CTA */}
        <section id="try-roundhand" className="mb-8">
          <Card className="card-accent-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="Download" size="sm" />
                Try Roundhand
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed mb-4">
                If you talk to your Mac more than you type, give it a day. Hold a key, say a
                sentence with an &quot;um&quot; and a &quot;scratch that&quot; in it, and see what
                lands.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <a href="https://roundhand.dev" className="project-link">
                  Download Roundhand for Mac
                </a>
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Or with Homebrew: <code>brew install --cask avisangle/roundhand/roundhand</code>
              </p>
              <p className="text-lg leading-relaxed mb-4">
                I built Roundhand solo, with a lot of help from Claude Code. I would most like to
                hear which technical words it mishears and which apps misbehave when it inserts
                text. You can reach me through this blog.
              </p>
              <p className="text-muted-foreground">
                Privacy details are at{" "}
                <a href="https://roundhand.dev/privacy" className="project-link">
                  roundhand.dev/privacy
                </a>
                . More posts are on the{" "}
                <Link href="/blog" className="project-link">
                  blog index
                </Link>
                .
              </p>
            </CardContent>
          </Card>
        </section>
      </div>

      <RelatedPosts slug={SLUG} />
      <PostNavigation slug={SLUG} />
    </>
  )
}
