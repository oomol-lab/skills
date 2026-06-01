# Cloudflare Worker · `list_workers`

List Workers in a Cloudflare account using the Workers beta API.

- **Service**: `cloudflare_worker`
- **Action**: `list_workers`
- **Action id**: `cloudflare_worker.list_workers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudflare_worker" --action "list_workers"
```

## Run

```bash
oo connector run "cloudflare_worker" --action "list_workers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
