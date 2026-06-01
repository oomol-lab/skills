# Deepgram · `get_project`

Get details for one Deepgram project.

- **Service**: `deepgram`
- **Action**: `get_project`
- **Action id**: `deepgram.get_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "deepgram" --action "get_project"
```

## Run

```bash
oo connector run "deepgram" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
