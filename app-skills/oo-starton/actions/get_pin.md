# Starton · `get_pin`

Read one IPFS pin from Starton by pin identifier.

- **Service**: `starton`
- **Action**: `get_pin`
- **Action id**: `starton.get_pin`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "starton" --action "get_pin"
```

## Run

```bash
oo connector run "starton" --action "get_pin" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
