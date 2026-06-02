# Deepgram · `list_project_models`

List the models available to a specific Deepgram project.

- **Service**: `deepgram`
- **Action**: `list_project_models`
- **Action id**: `deepgram.list_project_models`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "deepgram" --action "list_project_models"
```

## Run

```bash
oo connector run "deepgram" --action "list_project_models" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
