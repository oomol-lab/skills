# Cloudflare Worker · `put_worker_script_secret`

Add or replace a secret_text binding on a Cloudflare Worker script.

- **Service**: `cloudflare_worker`
- **Action**: `put_worker_script_secret`
- **Action id**: `cloudflare_worker.put_worker_script_secret`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudflare_worker" --action "put_worker_script_secret"
```

## Run

```bash
oo connector run "cloudflare_worker" --action "put_worker_script_secret" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Cloudflare Worker state. Confirm the exact payload and intended effect with the user before running.
