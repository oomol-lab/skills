# DigitalOcean · `get_account`

Retrieve the current DigitalOcean account profile and team context for the connected token.

- **Service**: `digital_ocean`
- **Action**: `get_account`
- **Action id**: `digital_ocean.get_account`
- **Required scopes**: account:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "digital_ocean" --action "get_account"
```

## Run

```bash
oo connector run "digital_ocean" --action "get_account" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
