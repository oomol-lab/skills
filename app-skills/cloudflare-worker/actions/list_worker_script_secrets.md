# Cloudflare Worker · `list_worker_script_secrets`

List secret bindings attached to a Cloudflare Worker script.

- **Service**: `cloudflare_worker`
- **Action**: `list_worker_script_secrets`
- **Action id**: `cloudflare_worker.list_worker_script_secrets`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudflare_worker" --action "list_worker_script_secrets"
```

## Run

```bash
oo connector run "cloudflare_worker" --action "list_worker_script_secrets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
