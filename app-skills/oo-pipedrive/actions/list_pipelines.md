# Pipedrive · `list_pipelines`

List Pipedrive pipelines with optional sorting and pagination.

- **Service**: `pipedrive`
- **Action**: `list_pipelines`
- **Action id**: `pipedrive.list_pipelines`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pipedrive" --action "list_pipelines"
```

## Run

```bash
oo connector run "pipedrive" --action "list_pipelines" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
