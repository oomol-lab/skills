# Databricks · `put_secret`

Create or overwrite a Databricks secret value inside one Databricks secret scope.

- **Service**: `databricks`
- **Action**: `put_secret`
- **Action id**: `databricks.put_secret`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "put_secret"
```

## Run

```bash
oo connector run "databricks" --action "put_secret" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Databricks state. Confirm the exact payload and intended effect with the user before running.
