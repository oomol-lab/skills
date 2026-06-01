# Postman · `get_accounts`

Tool to retrieve Postman billing account details for the authenticated team. Use when you need to access account information such as account ID, team ID, account state, billing slots, sales channel, or billing email.

- **Service**: `postman`
- **Action**: `get_accounts`
- **Action id**: `postman.get_accounts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_accounts"
```

## Run

```bash
oo connector run "postman" --action "get_accounts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
