# Pipedrive · `get_deal`

Get one Pipedrive deal by deal ID.

- **Service**: `pipedrive`
- **Action**: `get_deal`
- **Action id**: `pipedrive.get_deal`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pipedrive" --action "get_deal"
```

## Run

```bash
oo connector run "pipedrive" --action "get_deal" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
