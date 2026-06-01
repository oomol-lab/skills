# Doppler · `list_secrets`

List all secrets and their metadata for a specific project and config.

- **Service**: `doppler`
- **Action**: `list_secrets`
- **Action id**: `doppler.list_secrets`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "list_secrets"
```

## Run

```bash
oo connector run "doppler" --action "list_secrets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
