# Cloudflare Worker · `update_worker`

Replace a Cloudflare Worker using the Workers beta API, setting omitted fields to API defaults.

- **Service**: `cloudflare_worker`
- **Action**: `update_worker`
- **Action id**: `cloudflare_worker.update_worker`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudflare_worker" --action "update_worker"
```

## Run

```bash
oo connector run "cloudflare_worker" --action "update_worker" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Cloudflare Worker state. Confirm the exact payload and intended effect with the user before running.
