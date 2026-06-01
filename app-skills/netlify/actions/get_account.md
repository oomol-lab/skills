# Netlify · `get_account`

Retrieve one Netlify account membership, including billing and capability fields returned by Netlify.

- **Service**: `netlify`
- **Action**: `get_account`
- **Action id**: `netlify.get_account`
- **Required scopes**: netlify.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "netlify" --action "get_account"
```

## Run

```bash
oo connector run "netlify" --action "get_account" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
