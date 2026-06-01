# Certifier · `list_credential_interactions`

List Certifier credential interaction events with optional credential filtering and cursor pagination.

- **Service**: `certifier`
- **Action**: `list_credential_interactions`
- **Action id**: `certifier.list_credential_interactions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "certifier" --action "list_credential_interactions"
```

## Run

```bash
oo connector run "certifier" --action "list_credential_interactions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
