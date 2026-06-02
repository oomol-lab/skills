# AddressZen · `get_key_availability`

Retrieve the current AddressZen key availability and context list.

- **Service**: `addresszen`
- **Action**: `get_key_availability`
- **Action id**: `addresszen.get_key_availability`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "addresszen" --action "get_key_availability"
```

## Run

```bash
oo connector run "addresszen" --action "get_key_availability" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
