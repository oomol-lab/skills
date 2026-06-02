# Cloudflare Worker · `delete_worker`

Delete a Cloudflare Worker and its associated resources using the Workers beta API.

- **Service**: `cloudflare_worker`
- **Action**: `delete_worker`
- **Action id**: `cloudflare_worker.delete_worker`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudflare_worker" --action "delete_worker"
```

## Run

```bash
oo connector run "cloudflare_worker" --action "delete_worker" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Cloudflare Worker data. Always confirm the target and get explicit user approval before running.
