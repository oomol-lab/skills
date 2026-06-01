# Todoist · `create_section`

Create a Todoist section inside a project.

- **Service**: `todoist`
- **Action**: `create_section`
- **Action id**: `todoist.create_section`
- **Required scopes**: todoist.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "todoist" --action "create_section"
```

## Run

```bash
oo connector run "todoist" --action "create_section" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Todoist state. Confirm the exact payload and intended effect with the user before running.
