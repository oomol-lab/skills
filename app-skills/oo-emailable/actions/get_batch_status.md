# Emailable · `get_batch_status`

Retrieve the latest Emailable status and results for an existing batch verification job.

- **Service**: `emailable`
- **Action**: `get_batch_status`
- **Action id**: `emailable.get_batch_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "emailable" --action "get_batch_status"
```

## Run

```bash
oo connector run "emailable" --action "get_batch_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
