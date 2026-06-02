---
name: oo-ipinfo-io
description: "IPinfo (ipinfo.io). Use this skill for ANY IPinfo request — searching and reading data. Whenever a task involves IPinfo, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "IPinfo"
  author: "OOMOL"
  version: "1.0.0"
  service: "ipinfo_io"
  categories: "Maps & Location, Data & Analytics"
  homepage: "https://ipinfo.io"
  icon: "https://static.oomol.com/logo/third-party/ipinfo_io.png"
---

# IPinfo

Operate **IPinfo** through your OOMOL-connected account. This skill calls the `ipinfo_io` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Maps & Location, Data & Analytics. Exposes 27 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected IPinfo. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "ipinfo_io" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "ipinfo_io" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`batch_lite_lookup`](actions/batch_lite_lookup.md) — Look up multiple Lite API IPs or field paths in a single batch request.
- [`batch_lookup`](actions/batch_lookup.md) — Look up multiple IPinfo legacy or Lite-compatible paths in a single batch request through the legacy batch endpoint.
- [`get_abuse_contact`](actions/get_abuse_contact.md) — Retrieve abuse contact data for a specific IP address when the token includes that dataset.
- [`get_carrier_info`](actions/get_carrier_info.md) — Retrieve carrier enrichment data for a specific IP address when the token includes that dataset.
- [`get_city_by_ip`](actions/get_city_by_ip.md) — Retrieve the city name for a specific IP address.
- [`get_company_info`](actions/get_company_info.md) — Retrieve company enrichment data for a specific IP address when the token includes that dataset.
- [`get_core_field_by_me`](actions/get_core_field_by_me.md) — Retrieve a single Lookup API core field for the caller's current IP address.
- [`get_country_by_ip`](actions/get_country_by_ip.md) — Retrieve the ISO 3166-1 alpha-2 country code for a specific IP address.
- [`get_current_ip`](actions/get_current_ip.md) — Retrieve the caller's current public IP address as plain text.
- [`get_current_ip_info`](actions/get_current_ip_info.md) — Retrieve the full legacy IPinfo profile for the caller's current IP address, including location, ASN, company, privacy, carrier, abuse, and hosted domain data when available.
- [`get_current_loc`](actions/get_current_loc.md) — Retrieve the caller's current coordinates in `latitude,longitude` format.
- [`get_current_region`](actions/get_current_region.md) — Retrieve the caller's current region or state name.
- [`get_geo_by_ip`](actions/get_geo_by_ip.md) — Retrieve Lookup API geolocation data for a specific IP address, including city, region, country, coordinates, timezone, and postal metadata.
- [`get_hostname_by_ip`](actions/get_hostname_by_ip.md) — Retrieve the reverse DNS hostname for a specific IP address.
- [`get_ip_by_ip`](actions/get_ip_by_ip.md) — Retrieve the requested IP address as plain text through the field filtering endpoint.
- [`get_ip_info`](actions/get_ip_info.md) — Retrieve Lite IP information for a specific IP address or for the caller's current IP when no IP is provided.
- [`get_ip_info_by_ip`](actions/get_ip_info_by_ip.md) — Retrieve the full legacy IPinfo profile for a specific IP address, including location, ASN, company, privacy, carrier, abuse, and hosted domain data when available.
- [`get_lite_field_by_ip`](actions/get_lite_field_by_ip.md) — Retrieve a single field from the Lite API for a specific IP address.
- [`get_location_by_ip`](actions/get_location_by_ip.md) — Retrieve coordinates for a specific IP address in `latitude,longitude` format.
- [`get_org_by_ip`](actions/get_org_by_ip.md) — Retrieve the organization summary for a specific IP address.
- [`get_plus_field_by_me`](actions/get_plus_field_by_me.md) — Retrieve a single Lookup API plus field for the caller's current IP address.
- [`get_postal_by_ip`](actions/get_postal_by_ip.md) — Retrieve the postal or ZIP code for a specific IP address.
- [`get_privacy_details`](actions/get_privacy_details.md) — Retrieve privacy detection flags for a specific IP address when the token includes privacy enrichment.
- [`get_region_by_ip`](actions/get_region_by_ip.md) — Retrieve the region or state name for a specific IP address.
- [`get_timezone_by_ip`](actions/get_timezone_by_ip.md) — Retrieve the IANA timezone name for a specific IP address.
- [`get_token_info`](actions/get_token_info.md) — Retrieve account and usage metadata for the current IPinfo token.
- [`map_ips`](actions/map_ips.md) — Upload up to 500,000 IP addresses to the IPinfo map tool and return the generated report URL.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change IPinfo state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — IPinfo is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=ipinfo_io
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- IPinfo homepage: https://ipinfo.io
