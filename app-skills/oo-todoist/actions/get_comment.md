# Todoist · `get_comment`

Get a Todoist comment by comment ID.

- **Service**: `todoist`
- **Action**: `get_comment`
- **Action id**: `todoist.get_comment`
- **Required scopes**: todoist.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "todoist" --action "get_comment"
```

## Run

```bash
oo connector run "todoist" --action "get_comment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Todoist state. Confirm the exact payload and intended effect with the user before running.
