# Mailtrap · `get_permission_resources`

Get Mailtrap permission resources accessible to the token.

- **Service**: `mailtrap`
- **Action**: `get_permission_resources`
- **Action id**: `mailtrap.get_permission_resources`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "get_permission_resources"
```

## Run

```bash
oo connector run "mailtrap" --action "get_permission_resources" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
