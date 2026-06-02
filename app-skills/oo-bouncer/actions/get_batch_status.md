# Bouncer · `get_batch_status`

Get the current processing status of a Bouncer batch verification request.

- **Service**: `bouncer`
- **Action**: `get_batch_status`
- **Action id**: `bouncer.get_batch_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bouncer" --action "get_batch_status"
```

## Run

```bash
oo connector run "bouncer" --action "get_batch_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
