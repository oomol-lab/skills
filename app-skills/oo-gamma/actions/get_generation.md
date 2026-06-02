# Gamma · `get_generation`

Get the status and result URLs for a specific Gamma generation job.

- **Service**: `gamma`
- **Action**: `get_generation`
- **Action id**: `gamma.get_generation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gamma" --action "get_generation"
```

## Run

```bash
oo connector run "gamma" --action "get_generation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
