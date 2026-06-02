# Bouncer · `delete_batch_request`

Delete a Bouncer batch verification request and its stored results.

- **Service**: `bouncer`
- **Action**: `delete_batch_request`
- **Action id**: `bouncer.delete_batch_request`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bouncer" --action "delete_batch_request"
```

## Run

```bash
oo connector run "bouncer" --action "delete_batch_request" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Bouncer data. Always confirm the target and get explicit user approval before running.
