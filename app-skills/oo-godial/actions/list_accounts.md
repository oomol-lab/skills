# GoDial · `list_accounts`

List GoDial accounts in the current company.

- **Service**: `godial`
- **Action**: `list_accounts`
- **Action id**: `godial.list_accounts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "godial" --action "list_accounts"
```

## Run

```bash
oo connector run "godial" --action "list_accounts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
