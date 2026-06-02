# Fireflies · `get_current_user`

Get the authenticated Fireflies user for the current API key.

- **Service**: `fireflies`
- **Action**: `get_current_user`
- **Action id**: `fireflies.get_current_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fireflies" --action "get_current_user"
```

## Run

```bash
oo connector run "fireflies" --action "get_current_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
