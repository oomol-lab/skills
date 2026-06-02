# Táve · `get_my_studio`

Fetch the current Táve studio profile for the connected API key.

- **Service**: `tave`
- **Action**: `get_my_studio`
- **Action id**: `tave.get_my_studio`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tave" --action "get_my_studio"
```

## Run

```bash
oo connector run "tave" --action "get_my_studio" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
