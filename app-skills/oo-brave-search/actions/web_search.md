# Brave Search · `web_search`

Search the Brave Search web index and return the selected result families.

- **Service**: `brave_search`
- **Action**: `web_search`
- **Action id**: `brave_search.web_search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "brave_search" --action "web_search"
```

## Run

```bash
oo connector run "brave_search" --action "web_search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
