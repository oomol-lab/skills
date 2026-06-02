# SignWell · `get_me`

Get the SignWell account information associated with the current API key.

- **Service**: `signwell`
- **Action**: `get_me`
- **Action id**: `signwell.get_me`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "signwell" --action "get_me"
```

## Run

```bash
oo connector run "signwell" --action "get_me" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
