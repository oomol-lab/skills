# Apify · `get_run`

Retrieve the current status and storage identifiers for one Apify actor run.

- **Service**: `apify`
- **Action**: `get_run`
- **Action id**: `apify.get_run`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apify" --action "get_run"
```

## Run

```bash
oo connector run "apify" --action "get_run" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
