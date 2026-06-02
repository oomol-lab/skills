# Celigo · `get_token_info`

Get metadata for the current Celigo API token.

- **Service**: `celigo`
- **Action**: `get_token_info`
- **Action id**: `celigo.get_token_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "celigo" --action "get_token_info"
```

## Run

```bash
oo connector run "celigo" --action "get_token_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
