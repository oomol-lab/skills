# Netlify · `get_site`

Retrieve one Netlify site by site ID or name.

- **Service**: `netlify`
- **Action**: `get_site`
- **Action id**: `netlify.get_site`
- **Required scopes**: netlify.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "netlify" --action "get_site"
```

## Run

```bash
oo connector run "netlify" --action "get_site" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
