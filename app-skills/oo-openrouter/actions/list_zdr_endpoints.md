# OpenRouter · `list_zdr_endpoints`

Preview the OpenRouter endpoints that remain available under Zero Data Retention.

- **Service**: `openrouter`
- **Action**: `list_zdr_endpoints`
- **Action id**: `openrouter.list_zdr_endpoints`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openrouter" --action "list_zdr_endpoints"
```

## Run

```bash
oo connector run "openrouter" --action "list_zdr_endpoints" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
