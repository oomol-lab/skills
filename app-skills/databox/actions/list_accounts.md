# Databox · `list_accounts`

List Databox accounts accessible to the API key.

- **Service**: `databox`
- **Action**: `list_accounts`
- **Action id**: `databox.list_accounts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databox" --action "list_accounts"
```

## Run

```bash
oo connector run "databox" --action "list_accounts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
