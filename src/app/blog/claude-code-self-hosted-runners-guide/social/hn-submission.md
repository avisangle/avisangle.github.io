# Hacker News Submission - Claude Code Self-Hosted Runners Guide

**Post date:** Day 1
**Best time:** 2:00 PM IST (morning PST window)

---

**Title:** Claude Code self-hosted runners: deployment guide for Kubernetes and Docker

**URL:** https://avinashsangle.com/blog/claude-code-self-hosted-runners-guide

---

**First Comment:**

Anthropic added self-hosted environments to Claude Code on August 6 (v2.1.224). I deployed a fleet on Kubernetes and wrote up the operational details that the quickstart skips - terminationGracePeriodSeconds, capacity planning, egress policy, and the fact that self-hosting doesn't reduce API costs since inference still routes through Anthropic. Interested in hearing from anyone running these at scale.
