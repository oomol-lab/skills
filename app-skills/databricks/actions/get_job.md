# Databricks · `get_job`

Get one Databricks job, including its current settings and optional continuation page token.

- **Service**: `databricks`
- **Action**: `get_job`
- **Action id**: `databricks.get_job`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "get_job"
```

## Run

```bash
oo connector run "databricks" --action "get_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
