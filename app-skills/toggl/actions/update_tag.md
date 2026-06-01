# Toggl Track · `update_tag`

Update an existing Toggl Track tag.

- **Service**: `toggl`
- **Action**: `update_tag`
- **Action id**: `toggl.update_tag`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "toggl" --action "update_tag"
```

## Run

```bash
oo connector run "toggl" --action "update_tag" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Toggl Track state. Confirm the exact payload and intended effect with the user before running.
