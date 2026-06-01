# Amara · `create_video`

Create a new Amara video from a source URL and title, with optional metadata.

- **Service**: `amara`
- **Action**: `create_video`
- **Action id**: `amara.create_video`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "amara" --action "create_video"
```

## Run

```bash
oo connector run "amara" --action "create_video" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Amara state. Confirm the exact payload and intended effect with the user before running.
