---
name: oo-ipdata-co
description: "ipdata.co (ipdata.co). Use this skill for ANY ipdata.co request — searching and reading data. Whenever a task involves ipdata.co, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "ipdata.co"
  author: "OOMOL"
  version: "1.0.0"
  service: "ipdata_co"
  categories: "Maps & Location, Security & Identity, Data & Analytics"
  homepage: "https://ipdata.co"
  icon: "https://static.oomol.com/logo/third-party/ipdata_co.svg"
---

# ipdata.co

Operate **ipdata.co** through your OOMOL-connected account. This skill calls the `ipdata_co` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Maps & Location, Security & Identity, Data & Analytics. Exposes 30 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected ipdata.co. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "ipdata_co" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "ipdata_co" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`bulk_lookup`](actions/bulk_lookup.md) — Look up up to 100 IP addresses in a single ipdata bulk API request.
- [`get_calling_code`](actions/get_calling_code.md) — Look up the calling_code field for a specific IP address or the caller's current IP address.
- [`get_carrier_by_ip`](actions/get_carrier_by_ip.md) — Look up carrier data for a specific IP address or the caller's current IP address.
- [`get_city`](actions/get_city.md) — Look up the city field for a specific IP address or the caller's current IP address.
- [`get_company_by_ip`](actions/get_company_by_ip.md) — Look up company data for a specific IP address or the caller's current IP address.
- [`get_continent_code`](actions/get_continent_code.md) — Look up the continent_code field for a specific IP address or the caller's current IP address.
- [`get_continent_name`](actions/get_continent_name.md) — Look up the continent_name field for a specific IP address or the caller's current IP address.
- [`get_count`](actions/get_count.md) — Look up the count field for a specific IP address or the caller's current IP address.
- [`get_country_code`](actions/get_country_code.md) — Look up the country_code field for a specific IP address or the caller's current IP address.
- [`get_country_name`](actions/get_country_name.md) — Look up the country_name field for a specific IP address or the caller's current IP address.
- [`get_currency_by_ip`](actions/get_currency_by_ip.md) — Look up currency data for a specific IP address or the caller's current IP address.
- [`get_emoji_flag`](actions/get_emoji_flag.md) — Look up the emoji_flag field for a specific IP address or the caller's current IP address.
- [`get_emoji_unicode`](actions/get_emoji_unicode.md) — Look up the emoji_unicode field for a specific IP address or the caller's current IP address.
- [`get_flag`](actions/get_flag.md) — Look up the flag field for a specific IP address or the caller's current IP address.
- [`get_ip`](actions/get_ip.md) — Look up the IP field for a specific IP address or the caller's current IP address.
- [`get_is_eu`](actions/get_is_eu.md) — Look up the is_eu field for a specific IP address or the caller's current IP address.
- [`get_languages_by_ip`](actions/get_languages_by_ip.md) — Look up language data for a specific IP address or the caller's current IP address.
- [`get_latitude`](actions/get_latitude.md) — Look up the latitude field for a specific IP address or the caller's current IP address.
- [`get_longitude`](actions/get_longitude.md) — Look up the longitude field for a specific IP address or the caller's current IP address.
- [`get_postal`](actions/get_postal.md) — Look up the postal field for a specific IP address or the caller's current IP address.
- [`get_region`](actions/get_region.md) — Look up the region field for a specific IP address or the caller's current IP address.
- [`get_region_code`](actions/get_region_code.md) — Look up the region_code field for a specific IP address or the caller's current IP address.
- [`get_threat_by_ip`](actions/get_threat_by_ip.md) — Look up threat intelligence data for a specific IP address or the caller's current IP address.
- [`get_time_zone_by_ip`](actions/get_time_zone_by_ip.md) — Look up time zone data for a specific IP address or the caller's current IP address.
- [`lookup_advanced_asn`](actions/lookup_advanced_asn.md) — Look up advanced autonomous system details by ASN number with the ipdata ASN endpoint.
- [`lookup_basic_asn_by_ip`](actions/lookup_basic_asn_by_ip.md) — Look up a specific IP address and return only the ASN object from the ipdata response.
- [`lookup_current_ip`](actions/lookup_current_ip.md) — Look up the caller's current IP address with the ipdata main API endpoint.
- [`lookup_current_ip_eu`](actions/lookup_current_ip_eu.md) — Look up the caller's current IP address with the ipdata EU API endpoint.
- [`lookup_ip`](actions/lookup_ip.md) — Look up a specific IP address with the ipdata main API endpoint.
- [`lookup_ip_eu`](actions/lookup_ip_eu.md) — Look up a specific IP address with the ipdata EU API endpoint.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change ipdata.co state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — ipdata.co is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=ipdata_co
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- ipdata.co homepage: https://ipdata.co
