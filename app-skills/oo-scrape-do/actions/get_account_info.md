# Scrape.do · `get_account_info`

Retrieve Scrape.do account information and usage counters for the API token.

- **Service**: `scrape_do`
- **Action**: `get_account_info`
- **Action id**: `scrape_do.get_account_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "scrape_do" --action "get_account_info"
```

## Run

```bash
oo connector run "scrape_do" --action "get_account_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
