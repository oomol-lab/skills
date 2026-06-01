# Cloudflare Worker · `upload_worker_script`

Create or replace a Cloudflare Worker script by uploading a module bundle as multipart/form-data.

- **Service**: `cloudflare_worker`
- **Action**: `upload_worker_script`
- **Action id**: `cloudflare_worker.upload_worker_script`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudflare_worker" --action "upload_worker_script"
```

## Run

```bash
oo connector run "cloudflare_worker" --action "upload_worker_script" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Cloudflare Worker state. Confirm the exact payload and intended effect with the user before running.
