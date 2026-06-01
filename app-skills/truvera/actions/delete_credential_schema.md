# Truvera · `delete_credential_schema`

Delete a Truvera credential schema and return the background job handle for polling completion.

- **Service**: `truvera`
- **Action**: `delete_credential_schema`
- **Action id**: `truvera.delete_credential_schema`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "truvera" --action "delete_credential_schema"
```

## Run

```bash
oo connector run "truvera" --action "delete_credential_schema" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Truvera data. Always confirm the target and get explicit user approval before running.
