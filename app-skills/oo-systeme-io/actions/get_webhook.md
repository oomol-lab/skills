# Systeme.io · `get_webhook`

Get a single webhook from Systeme.io by ID.

- **Service**: `systeme_io`
- **Action**: `get_webhook`
- **Action id**: `systeme_io.get_webhook`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "systeme_io" --action "get_webhook"
```

## Run

```bash
oo connector run "systeme_io" --action "get_webhook" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
