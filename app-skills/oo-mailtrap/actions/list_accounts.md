# Mailtrap · `list_accounts`

List Mailtrap accounts accessible with the current API token.

- **Service**: `mailtrap`
- **Action**: `list_accounts`
- **Action id**: `mailtrap.list_accounts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "list_accounts"
```

## Run

```bash
oo connector run "mailtrap" --action "list_accounts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
