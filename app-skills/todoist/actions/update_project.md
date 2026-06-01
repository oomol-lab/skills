# Todoist · `update_project`

Update a Todoist project by project ID.

- **Service**: `todoist`
- **Action**: `update_project`
- **Action id**: `todoist.update_project`
- **Required scopes**: todoist.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "todoist" --action "update_project"
```

## Run

```bash
oo connector run "todoist" --action "update_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Todoist state. Confirm the exact payload and intended effect with the user before running.
