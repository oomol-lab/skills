# Toggl Track · `create_tag`

Create a new Toggl Track tag in a workspace.

- **Service**: `toggl`
- **Action**: `create_tag`
- **Action id**: `toggl.create_tag`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "toggl" --action "create_tag"
```

## Run

```bash
oo connector run "toggl" --action "create_tag" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Toggl Track state. Confirm the exact payload and intended effect with the user before running.
