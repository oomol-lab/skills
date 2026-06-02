# Agenty · `start_job`

Start one Agenty job for an existing agent.

- **Service**: `agenty`
- **Action**: `start_job`
- **Action id**: `agenty.start_job`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agenty" --action "start_job"
```

## Run

```bash
oo connector run "agenty" --action "start_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
