# Netlify · `list_site_forms`

List forms detected for one Netlify site.

- **Service**: `netlify`
- **Action**: `list_site_forms`
- **Action id**: `netlify.list_site_forms`
- **Required scopes**: netlify.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "netlify" --action "list_site_forms"
```

## Run

```bash
oo connector run "netlify" --action "list_site_forms" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
