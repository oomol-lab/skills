# Toggl Track · `update_project`

Update an existing Toggl Track project.

- **Service**: `toggl`
- **Action**: `update_project`
- **Action id**: `toggl.update_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "toggl" --action "update_project"
```

## Run

```bash
oo connector run "toggl" --action "update_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Toggl Track state. Confirm the exact payload and intended effect with the user before running.
