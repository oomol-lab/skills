# Truvera · `get_credential_schema`

Get one Truvera credential schema by schema identifier.

- **Service**: `truvera`
- **Action**: `get_credential_schema`
- **Action id**: `truvera.get_credential_schema`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "truvera" --action "get_credential_schema"
```

## Run

```bash
oo connector run "truvera" --action "get_credential_schema" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
