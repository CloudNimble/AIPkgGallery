# AI•Pkg — Project Instructions

## What AI•Pkg Is

AI•Pkg is the universal package registry for AI platform plugins. One package, every AI platform.

A developer builds a plugin for the AI platform they know (Claude Code, Cursor, Copilot, etc.). The `aipkg pack` command reads their existing project — the MCP configs, skills, commands, agents, prompts — and produces a single `.aipkg` package with a semantic `.aispec` manifest. That package gets pushed to the registry at aipkg.org. When a user on *any* supported AI platform clicks install in their platform's native UI, the platform's SDK translates the canonical manifest into its own native config format and places everything in the right directory. Automatically.

**The developer writes once. The user clicks install. AI•Pkg does everything in between.**

This is distribution at scale. NuGet has 500K+ packages and 883B+ downloads. npm has 3.9M packages and 50B+ downloads/month. AI•Pkg targets numbers that could surpass npm because every AI platform pulls from the same registry.

## Core Architecture (NuGet Parallel)

AI•Pkg's architecture directly mirrors NuGet's proven model:

| NuGet Concept | AI•Pkg Equivalent | Purpose |
|---|---|---|
| `.nupkg` | `.aipkg` | Universal package archive (ZIP) |
| `.nuspec` | `.aispec` | Semantic manifest (JSON, not a file list) |
| TFMs (Target Framework Monikers) | APMs (AI Platform Monikers) | Platform targeting via inheritance graph |
| `lib/{tfm}/` | `lib/{apm}/` | Platform-specific content inside `lib/` |
| NuGet.org | aipkg.org | Public registry |
| NuGet SDK in Visual Studio | AI•Pkg SDK in platforms | Native platform integration |
| `dotnet pack` / `dotnet nuget push` | `aipkg pack` / `aipkg push` | Publisher CLI tools |

**APMs are the cornerstone of the platform.** They work exactly like TFMs: a directed inheritance graph where `claude-code` inherits from `claude`, which inherits from `ai`. The `lib/` folder structure mirrors NuGet's `lib/{tfm}/` convention — APM monikers live *inside* `lib/`, not as a top-level `apm/` folder.

## The Two Audiences

### Plugin Developers (Publishers)
"Build your plugin for one platform, publish it, and it works on all of them."

The packager (`aipkg pack`) is an **on-ramp, not a starting line**. It reads an existing Claude Code plugin (or Cursor plugin, etc.) and produces a universal package. Zero platform expertise required beyond the one platform you already know.

### AI Platform Builders
"Integrate the SDK and your users get instant access to the entire plugin ecosystem."

Like adding NuGet support to Visual Studio. The platform SDK handles registry queries, package resolution, APM fallback, manifest translation, and secure installation. Platforms become the installation surface — users never interact with AI•Pkg directly.

## Security Is a First-Class Concern

Security is the #1 problem facing the AI tooling ecosystem today. AI•Pkg solves it with:

- **Code signing** — packages are cryptographically signed; unsigned packages require explicit opt-in
- **Server-side vulnerability analysis** — static analysis, antivirus scanning, and AI-powered prompt injection detection run *before* packages are published to the registry
- **Permission declarations** — manifests declare what capabilities a package needs (`process:exec`, `secrets:read`, etc.) so platforms can warn users before installation
- **Supply chain protections** — verified publisher identity, content-addressed storage, incident response procedures

AI•Pkg packages influence AI model behavior directly — a malicious prompt is as dangerous as a malicious binary. The security model is designed for this reality.

## What AI•Pkg Is NOT

- **Not a CLI-first experience.** The CLI is for publishers only (`aipkg pack`, `aipkg push`). CLI-level installation is a temporary workaround until platforms build native registry integration. It should never be presented as the primary or end-state user experience.
- **Not a runtime.** AI•Pkg installs packages. It does not host, run, or manage MCP servers, agents, or plugins at runtime. That's the platform's job.
- **Not forcing a rewrite.** If your plugin works on one platform, `aipkg pack` reads it and produces a valid package. Meet developers where they are.

## Key Locations

| Path | Purpose |
|---|---|
| `src/AIPkg.Docs/` | Mintlify documentation site (specs, plans, home page) |
| `src/AIPkg.Docs/specs/` | Normative specification suite |
| `src/AIPkg.Docs/plan/` | Implementation plan documents |
| `src/AIPkg.Docs/snippets/` | JSX components for the home page |
| `docs/` | Design documents and plans |

## Technical Decisions

- **Data layer:** EasyAF — SQL Server DB Project (`.sqlproj`) as schema source of truth; code-generated EF Core 10 entities
- **API:** V3-only public API (NuGet V3 protocol parallel); OData Restier for admin/internal only
- **Frontend:** Blazor SSR + Interactive Server; no Razor views, no jQuery, no OWIN
- **CLI:** `aipkg` — .NET 10 Native AOT single-file binary (publisher tool only)
- **Solution:** `AIpkg.slnx` (SLNX format); do NOT convert existing `NuGetGallery.sln`
- **License:** Apache 2.0 (forked from NuGetGallery); retain copyright notices and NOTICE file
- **Docs:** Mintlify at `src/AIPkg.Docs/`; run with `mint dev` from that directory

## Home Page Structure

The home page (aipkg.org) serves two jobs simultaneously:
1. **Vision/manifesto** — buy visitors into the concept of a universal AI package registry
2. **Dual-audience funnel** — route publishers and platform builders to their respective landing pages (`/for-publishers`, `/for-platforms`)

The home page is NOT a product feature tour. It's the story of why this needs to exist and why now. Detailed "how it works" content belongs on the persona landing pages.

## Writing Style

When describing AI•Pkg, lead with the distribution story, not the CLI:
- YES: "Write your plugin once, distribute it to every AI platform"
- YES: "The NuGet of AI tooling — one registry, every platform"
- NO: "Install packages with `aipkg install`"
- NO: "The CLI detects MCP servers and skills" (this is a feature detail, not the vision)
