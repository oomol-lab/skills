# Todoist · `update_section`

Update a Todoist section by section ID.

- **Service**: `todoist`
- **Action**: `update_section`
- **Action id**: `todoist.update_section`
- **Required scopes**: todoist.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "todoist" --action "update_section"
```

## Run

```bash
oo connector run "todoist" --action "update_section" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Todoist state. Confirm the exact payload and intended effect with the user before running.
