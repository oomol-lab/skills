---
name: oo-virustotal
description: "VirusTotal (virustotal.com). Use this skill for ANY VirusTotal request — reading, creating, and updating data. Whenever a task involves VirusTotal, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "VirusTotal"
  author: "OOMOL"
  version: "1.0.0"
  service: "virustotal"
  categories: "Security & Identity, Data & Analytics"
  homepage: "https://www.virustotal.com"
  icon: "https://static.oomol.com/logo/third-party/Virustotal.webp"
---

# VirusTotal

Operate **VirusTotal** through your OOMOL-connected account. This skill calls the `virustotal` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Security & Identity, Data & Analytics. Exposes 16 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected VirusTotal. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "virustotal" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "virustotal" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_comment`](actions/add_comment.md) — Add a community comment to a file, URL, domain, or IP address in VirusTotal.
- [`add_vote`](actions/add_vote.md) — Submit a harmless or malicious vote for a VirusTotal file, URL, domain, or IP.
- [`get_analysis`](actions/get_analysis.md) — Retrieve a VirusTotal analysis object by analysis ID.
- [`get_comments`](actions/get_comments.md) — Retrieve community comments for a file, URL, domain, or IP address in VirusTotal.
- [`get_domain_relationships`](actions/get_domain_relationships.md) — Retrieve related VirusTotal objects for a domain, with an option to request descriptors only.
- [`get_domain_report`](actions/get_domain_report.md) — Retrieve the latest VirusTotal report for a domain.
- [`get_file_report`](actions/get_file_report.md) — Retrieve the latest VirusTotal report for a file identifier.
- [`get_ip_address_relationships`](actions/get_ip_address_relationships.md) — Retrieve related VirusTotal objects for an IP address, with an option to request descriptors only.
- [`get_ip_address_report`](actions/get_ip_address_report.md) — Retrieve the latest VirusTotal report for an IP address.
- [`get_metadata`](actions/get_metadata.md) — Retrieve VirusTotal metadata, including available privileges, engines, and relationship names.
- [`get_url_report`](actions/get_url_report.md) — Retrieve the latest VirusTotal report for a URL using either a raw URL or a VirusTotal URL identifier.
- [`get_votes`](actions/get_votes.md) — Retrieve community votes for a file, URL, domain, or IP address in VirusTotal.
- [`rescan_file`](actions/rescan_file.md) — Request a fresh VirusTotal analysis for a previously submitted file.
- [`scan_url`](actions/scan_url.md) — Submit a URL to VirusTotal for analysis.
- [`search`](actions/search.md) — Search files, URLs, domains, IPs, and other objects in VirusTotal.
- [`upload_file`](actions/upload_file.md) — Upload a file to VirusTotal for analysis, automatically using the large-file upload URL when needed.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change VirusTotal state — confirm the exact payload and effect with the user before running.**
- **Delete or remove actions are destructive — always confirm the target and get explicit approval first.**

## First-time setup

These are **one-time** steps — do not repeat them on every call. Run a step only when a command fails for the matching reason.

- **`oo: command not found`** — install the oo CLI (other platforms: <https://cli.oomol.com/install-guide.md>):

  ```bash
  curl -fsSL https://cli.oomol.com/install.sh | bash    # macOS / Linux
  ```

  ```powershell
  irm https://cli.oomol.com/install.ps1 | iex           # Windows PowerShell
  ```

- **Not signed in / authentication error** — sign in to your OOMOL account once:

  ```bash
  oo auth login
  ```

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — VirusTotal is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=virustotal
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- VirusTotal homepage: https://www.virustotal.com
