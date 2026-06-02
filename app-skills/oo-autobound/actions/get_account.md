# Autobound · `get_account`

Get the authenticated Autobound Signals account details and current credit balance.

- **Service**: `autobound`
- **Action**: `get_account`
- **Action id**: `autobound.get_account`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "autobound" --action "get_account"
```

## Run

```bash
oo connector run "autobound" --action "get_account" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
