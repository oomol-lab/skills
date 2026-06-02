# Clockify · `create_project`

Create a new Clockify project in a workspace.

- **Service**: `clockify`
- **Action**: `create_project`
- **Action id**: `clockify.create_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clockify" --action "create_project"
```

## Run

```bash
oo connector run "clockify" --action "create_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Clockify state. Confirm the exact payload and intended effect with the user before running.
