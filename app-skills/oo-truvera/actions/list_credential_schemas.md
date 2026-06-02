# Truvera · `list_credential_schemas`

List credential schemas created by the authenticated Truvera account.

- **Service**: `truvera`
- **Action**: `list_credential_schemas`
- **Action id**: `truvera.list_credential_schemas`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "truvera" --action "list_credential_schemas"
```

## Run

```bash
oo connector run "truvera" --action "list_credential_schemas" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
