# Pipedrive · `get_stage`

Get one Pipedrive stage by stage ID.

- **Service**: `pipedrive`
- **Action**: `get_stage`
- **Action id**: `pipedrive.get_stage`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pipedrive" --action "get_stage"
```

## Run

```bash
oo connector run "pipedrive" --action "get_stage" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
