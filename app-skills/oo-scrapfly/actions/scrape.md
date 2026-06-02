# Scrapfly · `scrape`

Scrape one public URL through Scrapfly and return the documented JSON response envelope.

- **Service**: `scrapfly`
- **Action**: `scrape`
- **Action id**: `scrapfly.scrape`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "scrapfly" --action "scrape"
```

## Run

```bash
oo connector run "scrapfly" --action "scrape" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
