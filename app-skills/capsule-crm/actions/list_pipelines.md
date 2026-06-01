# Capsule CRM · `list_pipelines`

List Capsule CRM sales pipelines.

- **Service**: `capsule_crm`
- **Action**: `list_pipelines`
- **Action id**: `capsule_crm.list_pipelines`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "capsule_crm" --action "list_pipelines"
```

## Run

```bash
oo connector run "capsule_crm" --action "list_pipelines" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
