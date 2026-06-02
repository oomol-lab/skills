# cloudlayer.io · `get_job`

Get one cloudlayer.io job by job ID to inspect status, timing, and request metadata.

- **Service**: `cloudlayer`
- **Action**: `get_job`
- **Action id**: `cloudlayer.get_job`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudlayer" --action "get_job"
```

## Run

```bash
oo connector run "cloudlayer" --action "get_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
