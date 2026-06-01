# Databricks · `create_secret_scope`

Create a Databricks secret scope with an optional backend configuration and initial manager principal.

- **Service**: `databricks`
- **Action**: `create_secret_scope`
- **Action id**: `databricks.create_secret_scope`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "databricks" --action "create_secret_scope"
```

## Run

```bash
oo connector run "databricks" --action "create_secret_scope" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Databricks state. Confirm the exact payload and intended effect with the user before running.
