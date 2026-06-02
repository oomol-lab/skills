# Netlify · `list_site_deploys`

List deploys for one Netlify site.

- **Service**: `netlify`
- **Action**: `list_site_deploys`
- **Action id**: `netlify.list_site_deploys`
- **Required scopes**: netlify.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "netlify" --action "list_site_deploys"
```

## Run

```bash
oo connector run "netlify" --action "list_site_deploys" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
