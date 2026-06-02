# Agenty · `stop_job`

Stop one running Agenty job by job identifier.

- **Service**: `agenty`
- **Action**: `stop_job`
- **Action id**: `agenty.stop_job`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agenty" --action "stop_job"
```

## Run

```bash
oo connector run "agenty" --action "stop_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
