# Cloudflare Worker · `delete_worker_script_secret`

Delete a secret binding from a Cloudflare Worker script.

- **Service**: `cloudflare_worker`
- **Action**: `delete_worker_script_secret`
- **Action id**: `cloudflare_worker.delete_worker_script_secret`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudflare_worker" --action "delete_worker_script_secret"
```

## Run

```bash
oo connector run "cloudflare_worker" --action "delete_worker_script_secret" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Cloudflare Worker data. Always confirm the target and get explicit user approval before running.
