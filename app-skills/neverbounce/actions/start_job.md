# NeverBounce · `start_job`

Start a parsed NeverBounce bulk job.

- **Service**: `neverbounce`
- **Action**: `start_job`
- **Action id**: `neverbounce.start_job`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "neverbounce" --action "start_job"
```

## Run

```bash
oo connector run "neverbounce" --action "start_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
