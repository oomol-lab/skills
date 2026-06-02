# Hunter · `account_information`

Retrieve information about the authenticated Hunter account.

- **Service**: `hunter`
- **Action**: `account_information`
- **Action id**: `hunter.account_information`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hunter" --action "account_information"
```

## Run

```bash
oo connector run "hunter" --action "account_information" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
