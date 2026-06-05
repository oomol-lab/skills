# Valyu · `search`

Search web, academic, financial, and proprietary data sources with Valyu.

- **Service**: `valyu`
- **Action**: `search`
- **Action id**: `valyu.search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "valyu" --action "search"
```

## Run

```bash
oo connector run "valyu" --action "search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
