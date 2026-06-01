# Cloudflare Worker · `get_worker_script_settings`

Get Worker metadata and configuration for a Cloudflare Worker script.

- **Service**: `cloudflare_worker`
- **Action**: `get_worker_script_settings`
- **Action id**: `cloudflare_worker.get_worker_script_settings`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudflare_worker" --action "get_worker_script_settings"
```

## Run

```bash
oo connector run "cloudflare_worker" --action "get_worker_script_settings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
