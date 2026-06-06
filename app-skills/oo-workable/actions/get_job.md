# Workable · `get_job`

Get full details for a Workable job by shortcode.

- **Service**: `workable`
- **Action**: `get_job`
- **Action id**: `workable.get_job`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "workable" --action "get_job"
```

## Run

```bash
oo connector run "workable" --action "get_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
