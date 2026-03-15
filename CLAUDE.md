# AIPkgGallery

## Project Notes

- **docs.json**: Never modify `docs.json` files. DotNetDocs handles those automatically.

# Project Instructions

## General Research Instructions

These rules apply to any research task performed by subagents in this repository.

### Subagent Rules

- Only run **two subagents at a time**. No more.
- When a subagent finishes, **commit its file immediately** before doing anything else.
- A new subagent may be spawned as soon as an old one finishes and its file is checked in. They do not need to be started in batches — just keep two running at all times until all items are done.

### DO NOT

- Make things up.
- Hallucinate information.
- Log anything that cannot be supported by facts found on a live, accessible website.
- Use the Wayback Machine for anything. If a website is not live and accessible, it is of no use.
- EVER re-spawn an agent because you think it failed. Keep track of the original subagents, and if one stops, doesn't complete, or errors out, then read its original transcript, STOP, and ask permission for what to do next.
- Use any existing content in other folders in the repo to make decisions about what to research.

### DO

- Create footnotes for everything, citing which page the information came from.
- Stop and ask questions if something is unclear.
- Give each subagent the role/permissions required to perform web searches.
- Check in each file immediately after its subagent completes, before spawning a replacement.

### File Format

Research profiles are Mintlify MDX files with frontmatter:

```
---
title: 'Profile Title'
description: 'Short description of the profile'
---
```

Use tables for data, `<Note>` tags for implications or callouts, `<Warning>` tags for important warnings, and footnotes (`[^1]`) with a Footnotes section at the end listing all source URLs.

### File Naming

Use lowercase with dashes between words: `claude-code.mdx`, `github-copilot.mdx`, `augment-code.mdx`, etc.
