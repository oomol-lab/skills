# HeyGen · `delete_video`

Delete a generated or translated HeyGen video that is no longer needed.

- **Service**: `heygen`
- **Action**: `delete_video`
- **Action id**: `heygen.delete_video`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "heygen" --action "delete_video"
```

## Run

```bash
oo connector run "heygen" --action "delete_video" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites HeyGen data. Always confirm the target and get explicit user approval before running.
