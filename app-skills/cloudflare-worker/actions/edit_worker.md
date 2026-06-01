# Cloudflare Worker · `edit_worker`

Partially update a Cloudflare Worker using the Workers beta API while leaving omitted fields unchanged.

- **Service**: `cloudflare_worker`
- **Action**: `edit_worker`
- **Action id**: `cloudflare_worker.edit_worker`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudflare_worker" --action "edit_worker"
```

## Run

```bash
oo connector run "cloudflare_worker" --action "edit_worker" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Cloudflare Worker state. Confirm the exact payload and intended effect with the user before running.
