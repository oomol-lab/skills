# Enigma · `get_account`

Retrieve the current Enigma account metadata available to the connected API key, including customer, billing, and auto-recharge details.

- **Service**: `enigma`
- **Action**: `get_account`
- **Action id**: `enigma.get_account`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "enigma" --action "get_account"
```

## Run

```bash
oo connector run "enigma" --action "get_account" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
