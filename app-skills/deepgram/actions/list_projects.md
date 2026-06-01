# Deepgram · `list_projects`

List the Deepgram projects available to the current API key.

- **Service**: `deepgram`
- **Action**: `list_projects`
- **Action id**: `deepgram.list_projects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "deepgram" --action "list_projects"
```

## Run

```bash
oo connector run "deepgram" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
