# Postmark · `get_bounces`

Get Postmark bounces for the current server with optional filters.

- **Service**: `postmark`
- **Action**: `get_bounces`
- **Action id**: `postmark.get_bounces`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postmark" --action "get_bounces"
```

## Run

```bash
oo connector run "postmark" --action "get_bounces" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
