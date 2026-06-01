# Capsule CRM · `list_pipeline_milestones`

List milestones for a Capsule CRM pipeline.

- **Service**: `capsule_crm`
- **Action**: `list_pipeline_milestones`
- **Action id**: `capsule_crm.list_pipeline_milestones`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "capsule_crm" --action "list_pipeline_milestones"
```

## Run

```bash
oo connector run "capsule_crm" --action "list_pipeline_milestones" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
