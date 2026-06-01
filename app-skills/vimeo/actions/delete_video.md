# Vimeo · `delete_video`

Delete a Vimeo video by ID.

- **Service**: `vimeo`
- **Action**: `delete_video`
- **Action id**: `vimeo.delete_video`
- **Required scopes**: vimeo.delete

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vimeo" --action "delete_video"
```

## Run

```bash
oo connector run "vimeo" --action "delete_video" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Vimeo data. Always confirm the target and get explicit user approval before running.
