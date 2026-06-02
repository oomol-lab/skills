# Cloudflare Worker · `list_worker_scripts`

List Worker scripts in a Cloudflare account.

- **Service**: `cloudflare_worker`
- **Action**: `list_worker_scripts`
- **Action id**: `cloudflare_worker.list_worker_scripts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudflare_worker" --action "list_worker_scripts"
```

## Run

```bash
oo connector run "cloudflare_worker" --action "list_worker_scripts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
