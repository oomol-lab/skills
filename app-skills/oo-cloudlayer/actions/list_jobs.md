# cloudlayer.io · `list_jobs`

List recent cloudlayer.io jobs for the current account with optional cursor pagination.

- **Service**: `cloudlayer`
- **Action**: `list_jobs`
- **Action id**: `cloudlayer.list_jobs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudlayer" --action "list_jobs"
```

## Run

```bash
oo connector run "cloudlayer" --action "list_jobs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
