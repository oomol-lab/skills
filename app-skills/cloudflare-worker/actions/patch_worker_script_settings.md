# Cloudflare Worker · `patch_worker_script_settings`

Patch Worker metadata and configuration for a Cloudflare Worker script.

- **Service**: `cloudflare_worker`
- **Action**: `patch_worker_script_settings`
- **Action id**: `cloudflare_worker.patch_worker_script_settings`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudflare_worker" --action "patch_worker_script_settings"
```

## Run

```bash
oo connector run "cloudflare_worker" --action "patch_worker_script_settings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Cloudflare Worker state. Confirm the exact payload and intended effect with the user before running.
