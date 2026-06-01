# Pipedrive · `get_pipeline`

Get one Pipedrive pipeline by pipeline ID.

- **Service**: `pipedrive`
- **Action**: `get_pipeline`
- **Action id**: `pipedrive.get_pipeline`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pipedrive" --action "get_pipeline"
```

## Run

```bash
oo connector run "pipedrive" --action "get_pipeline" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
