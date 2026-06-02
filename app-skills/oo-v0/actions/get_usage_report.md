# v0 · `get_usage_report`

Get usage events and pagination information from the v0 usage report API.

- **Service**: `v0`
- **Action**: `get_usage_report`
- **Action id**: `v0.get_usage_report`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "get_usage_report"
```

## Run

```bash
oo connector run "v0" --action "get_usage_report" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
