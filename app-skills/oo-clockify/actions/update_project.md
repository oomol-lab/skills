# Clockify · `update_project`

Update an existing Clockify project.

- **Service**: `clockify`
- **Action**: `update_project`
- **Action id**: `clockify.update_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clockify" --action "update_project"
```

## Run

```bash
oo connector run "clockify" --action "update_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Clockify state. Confirm the exact payload and intended effect with the user before running.
