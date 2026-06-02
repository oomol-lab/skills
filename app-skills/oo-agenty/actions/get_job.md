# Agenty · `get_job`

Get one Agenty job by job identifier.

- **Service**: `agenty`
- **Action**: `get_job`
- **Action id**: `agenty.get_job`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agenty" --action "get_job"
```

## Run

```bash
oo connector run "agenty" --action "get_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
