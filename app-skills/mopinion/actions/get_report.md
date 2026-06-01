# Mopinion · `get_report`

Fetch basic metadata for one Mopinion report.

- **Service**: `mopinion`
- **Action**: `get_report`
- **Action id**: `mopinion.get_report`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mopinion" --action "get_report"
```

## Run

```bash
oo connector run "mopinion" --action "get_report" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
