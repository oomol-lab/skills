# Todoist · `create_comment`

Create a Todoist comment on exactly one task or project.

- **Service**: `todoist`
- **Action**: `create_comment`
- **Action id**: `todoist.create_comment`
- **Required scopes**: todoist.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "todoist" --action "create_comment"
```

## Run

```bash
oo connector run "todoist" --action "create_comment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Todoist state. Confirm the exact payload and intended effect with the user before running.
