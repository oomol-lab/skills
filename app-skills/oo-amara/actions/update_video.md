# Amara · `update_video`

Update an existing Amara video's metadata, assignment, or language settings.

- **Service**: `amara`
- **Action**: `update_video`
- **Action id**: `amara.update_video`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amara" --action "update_video"
```

## Run

```bash
oo connector run "amara" --action "update_video" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Amara state. Confirm the exact payload and intended effect with the user before running.
