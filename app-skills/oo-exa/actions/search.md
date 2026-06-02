# Exa · `search`

Search the web with Exa and optionally enrich each result with contents.

- **Service**: `exa`
- **Action**: `search`
- **Action id**: `exa.search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "exa" --action "search"
```

## Run

```bash
oo connector run "exa" --action "search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
