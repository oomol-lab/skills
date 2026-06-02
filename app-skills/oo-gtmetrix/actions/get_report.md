# GTmetrix · `get_report`

Get a single GTmetrix report by slug.

- **Service**: `gtmetrix`
- **Action**: `get_report`
- **Action id**: `gtmetrix.get_report`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gtmetrix" --action "get_report"
```

## Run

```bash
oo connector run "gtmetrix" --action "get_report" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
