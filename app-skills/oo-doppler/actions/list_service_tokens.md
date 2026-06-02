# Doppler · `list_service_tokens`

List service tokens for a specific project and config.

- **Service**: `doppler`
- **Action**: `list_service_tokens`
- **Action id**: `doppler.list_service_tokens`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "list_service_tokens"
```

## Run

```bash
oo connector run "doppler" --action "list_service_tokens" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
