# Asana · `create_project`

Create an Asana project in a workspace with optional notes, owner, dates, and display settings.

- **Service**: `asana`
- **Action**: `create_project`
- **Action id**: `asana.create_project`
- **Required scopes**: projects:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "asana" --action "create_project"
```

## Run

```bash
oo connector run "asana" --action "create_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Asana state. Confirm the exact payload and intended effect with the user before running.
