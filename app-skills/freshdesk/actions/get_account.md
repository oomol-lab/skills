# Freshdesk · `get_account`

Get Freshdesk account details for the current API key.

- **Service**: `freshdesk`
- **Action**: `get_account`
- **Action id**: `freshdesk.get_account`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "freshdesk" --action "get_account"
```

## Run

```bash
oo connector run "freshdesk" --action "get_account" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
