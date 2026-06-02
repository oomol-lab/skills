# Certifier · `list_credentials`

List Certifier credentials with cursor pagination.

- **Service**: `certifier`
- **Action**: `list_credentials`
- **Action id**: `certifier.list_credentials`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "certifier" --action "list_credentials"
```

## Run

```bash
oo connector run "certifier" --action "list_credentials" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
