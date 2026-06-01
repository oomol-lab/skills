# Mezmo · `get_usage_summary`

Get the Mezmo usage summary for a required time window without flattening the upstream usage payload.

- **Service**: `mezmo`
- **Action**: `get_usage_summary`
- **Action id**: `mezmo.get_usage_summary`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mezmo" --action "get_usage_summary"
```

## Run

```bash
oo connector run "mezmo" --action "get_usage_summary" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
