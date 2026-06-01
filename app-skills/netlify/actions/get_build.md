# Netlify · `get_build`

Retrieve one Netlify build by build ID.

- **Service**: `netlify`
- **Action**: `get_build`
- **Action id**: `netlify.get_build`
- **Required scopes**: netlify.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "netlify" --action "get_build"
```

## Run

```bash
oo connector run "netlify" --action "get_build" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
