# Enigma · `get_background_task`

Retrieve the latest status for an Enigma background task created by an asynchronous GraphQL search or export workflow.

- **Service**: `enigma`
- **Action**: `get_background_task`
- **Action id**: `enigma.get_background_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "enigma" --action "get_background_task"
```

## Run

```bash
oo connector run "enigma" --action "get_background_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
