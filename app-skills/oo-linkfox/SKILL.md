---
name: oo-linkfox
description: "LinkFox (linkfox.com). Use this skill for ANY LinkFox request — searching and reading data. Whenever a task involves LinkFox, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "LinkFox"
  author: "OOMOL"
  version: "1.0.0"
  services: ["linkfox"]
  icon: "https://static.oomol.com/logo/third-party/linkfox.svg"
---

# LinkFox

Operate **LinkFox** through your OOMOL-connected account. This skill calls the `linkfox` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected LinkFox. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "linkfox" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "linkfox" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action is listed below with a one-line description; actions that change state carry a `[write]` or `[destructive]` tag. Before constructing `--data`, fetch the action's live schema with `oo connector schema` to get its authoritative input fields.

## Available actions

- `check_copyright_risk` — Check a product image for copyright risk through LinkFox and Ruiguan.
- `check_design_patent_risk` — Check a product image for design-patent risk through LinkFox and Ruiguan.
- `check_product_tro_risk` — Check a product for trademark, copyright, patent, and TRO risk through LinkFox and Maidalv.
- `check_text_trademark_risk` — Check product text for trademark risk through LinkFox and Ruiguan.
- `get_amazon_ads_authorization_url` — Create an Amazon Ads authorization URL through LinkFox.
- `get_amazon_ads_report` — Create or resume an Amazon Ads report and wait for a download URL.
- `get_amazon_opportunity_report` — Generate a LinkFox Amazon commercial opportunity report for a keyword.
- `get_amazon_product` — Get detailed Amazon product data for up to forty ASINs through LinkFox.
- `get_amazon_store_authorization_url` — Create an Amazon Selling Partner authorization URL through LinkFox.
- `get_amazon_store_report` — Create or resume an Amazon Selling Partner report and wait for a download URL.
- `get_current_account` — Get the current LinkFox account without exposing personal contact data.
- `get_echotik_products` — Get EchoTik details for a batch of TikTok products through LinkFox.
- `get_kalodata_product` — Get Kalodata details for a TikTok product through LinkFox.
- `list_1688_hot_products` — List high-performing 1688 products from LinkFox rankings.
- `list_amazon_ads_profiles` — List or refresh Amazon Ads profiles through LinkFox.
- `list_amazon_product_reviews` — Retrieve Amazon product reviews through LinkFox.
- `list_authorized_amazon_ads_accounts` — List Amazon Ads accounts authorized through LinkFox.
- `list_authorized_amazon_stores` — List Amazon stores authorized through LinkFox.
- `list_fastmoss_top_selling_products` — List top-selling TikTok products from FastMoss through LinkFox.
- `list_kalodata_products` — Browse Kalodata TikTok product rankings through LinkFox.
- `list_sp_campaigns` — List Sponsored Products campaigns through the LinkFox Amazon Ads gateway.
- `query_amazon_aba` — Run a natural-language Amazon Brand Analytics query through LinkFox.
- `search_1688_by_image` — Find visually similar 1688 products through LinkFox.
- `search_1688_products` — Search the LinkFox 1688 sourcing database.
- `search_amazon_by_image` — Find visually similar Amazon products through LinkFox.
- `search_amazon_opportunities` — Screen Amazon commercial opportunities with LinkFox market metrics.
- `search_amazon_products` — Search Amazon storefront products through LinkFox.
- `search_amazon_store_orders` — Search orders for an authorized Amazon store through LinkFox.
- `search_echotik_products` — Search EchoTik TikTok products through LinkFox.
- `search_fastmoss_products` — Search FastMoss TikTok products through LinkFox.

## Safety

- Untagged actions are reads (get / list / search) — safe to run directly.
- **Actions tagged `[write]` change LinkFox state — confirm the exact payload and effect with the user before running.**
- **Actions tagged `[destructive]` remove or overwrite data — always confirm the target and get explicit approval first.**

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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — LinkFox is not connected, or the connection expired or lacks a scope. Connect once (auth type: API key) at:

  ```text
  https://console.oomol.com/app-connections?provider=linkfox
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- LinkFox homepage: https://www.linkfox.com/
