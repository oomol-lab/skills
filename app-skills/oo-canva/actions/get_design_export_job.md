# Canva · `get_design_export_job`

Get the current status and result URLs for a Canva design export job created by create_design_export_job.

- **Service**: `canva`
- **Action**: `get_design_export_job`
- **Action id**: `canva.get_design_export_job`
- **Required scopes**: canva.design.content.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "canva" --action "get_design_export_job"
```

## Run

```bash
oo connector run "canva" --action "get_design_export_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
