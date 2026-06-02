# Netlify · `get_current_user`

Retrieve the Netlify user associated with the connected credential.

- **Service**: `netlify`
- **Action**: `get_current_user`
- **Action id**: `netlify.get_current_user`
- **Required scopes**: netlify.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "netlify" --action "get_current_user"
```

## Run

```bash
oo connector run "netlify" --action "get_current_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
