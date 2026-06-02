# Vimeo · `update_video`

Update basic metadata for a Vimeo video without uploading or replacing media.

- **Service**: `vimeo`
- **Action**: `update_video`
- **Action id**: `vimeo.update_video`
- **Required scopes**: vimeo.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vimeo" --action "update_video"
```

## Run

```bash
oo connector run "vimeo" --action "update_video" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Vimeo state. Confirm the exact payload and intended effect with the user before running.
