# Netlify · `list_submissions`

List Netlify form submissions by site or by form.

- **Service**: `netlify`
- **Action**: `list_submissions`
- **Action id**: `netlify.list_submissions`
- **Required scopes**: netlify.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "netlify" --action "list_submissions"
```

## Run

```bash
oo connector run "netlify" --action "list_submissions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
