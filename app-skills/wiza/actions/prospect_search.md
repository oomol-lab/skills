# Wiza · `prospect_search`

Search Wiza prospects with a filters object, matching the WIZA_PROSPECT_SEARCH Composio tool.

- **Service**: `wiza`
- **Action**: `prospect_search`
- **Action id**: `wiza.prospect_search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "wiza" --action "prospect_search"
```

## Run

```bash
oo connector run "wiza" --action "prospect_search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
