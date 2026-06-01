# Netlify · `get_deploy`

Retrieve one Netlify deploy by deploy ID.

- **Service**: `netlify`
- **Action**: `get_deploy`
- **Action id**: `netlify.get_deploy`
- **Required scopes**: netlify.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "netlify" --action "get_deploy"
```

## Run

```bash
oo connector run "netlify" --action "get_deploy" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
