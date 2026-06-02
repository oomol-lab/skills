# Vercel · `verify_project_domain`

Verify a Vercel project domain.

- **Service**: `vercel`
- **Action**: `verify_project_domain`
- **Action id**: `vercel.verify_project_domain`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vercel" --action "verify_project_domain"
```

## Run

```bash
oo connector run "vercel" --action "verify_project_domain" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
