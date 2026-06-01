# RenderForm · `get_usage`

Get current RenderForm credit usage for the API key and return a normalized usage summary.

- **Service**: `renderform`
- **Action**: `get_usage`
- **Action id**: `renderform.get_usage`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "renderform" --action "get_usage"
```

## Run

```bash
oo connector run "renderform" --action "get_usage" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
