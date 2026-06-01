# Deepgram · `get_project_model`

Get metadata for one model available to a Deepgram project.

- **Service**: `deepgram`
- **Action**: `get_project_model`
- **Action id**: `deepgram.get_project_model`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "deepgram" --action "get_project_model"
```

## Run

```bash
oo connector run "deepgram" --action "get_project_model" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
