# Toggl Track · `delete_tag`

Delete a Toggl Track tag by ID.

- **Service**: `toggl`
- **Action**: `delete_tag`
- **Action id**: `toggl.delete_tag`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "toggl" --action "delete_tag"
```

## Run

```bash
oo connector run "toggl" --action "delete_tag" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Toggl Track data. Always confirm the target and get explicit user approval before running.
