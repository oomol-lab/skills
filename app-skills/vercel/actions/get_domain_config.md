# Vercel · `get_domain_config`

Get domain configuration guidance from Vercel.

- **Service**: `vercel`
- **Action**: `get_domain_config`
- **Action id**: `vercel.get_domain_config`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vercel" --action "get_domain_config"
```

## Run

```bash
oo connector run "vercel" --action "get_domain_config" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
