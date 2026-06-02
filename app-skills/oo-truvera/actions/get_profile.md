# Truvera · `get_profile`

Get the authenticated Truvera account profile for the configured API key.

- **Service**: `truvera`
- **Action**: `get_profile`
- **Action id**: `truvera.get_profile`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "truvera" --action "get_profile"
```

## Run

```bash
oo connector run "truvera" --action "get_profile" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
