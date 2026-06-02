# Streamtime · `get_job`

Get a Streamtime job by ID.

- **Service**: `streamtime`
- **Action**: `get_job`
- **Action id**: `streamtime.get_job`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "streamtime" --action "get_job"
```

## Run

```bash
oo connector run "streamtime" --action "get_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
