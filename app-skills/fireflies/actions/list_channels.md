# Fireflies · `list_channels`

List Fireflies channels visible to the current API key.

- **Service**: `fireflies`
- **Action**: `list_channels`
- **Action id**: `fireflies.list_channels`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fireflies" --action "list_channels"
```

## Run

```bash
oo connector run "fireflies" --action "list_channels" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
