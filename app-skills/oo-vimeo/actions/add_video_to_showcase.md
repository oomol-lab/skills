# Vimeo · `add_video_to_showcase`

Add a Vimeo video to a showcase.

- **Service**: `vimeo`
- **Action**: `add_video_to_showcase`
- **Action id**: `vimeo.add_video_to_showcase`
- **Required scopes**: vimeo.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vimeo" --action "add_video_to_showcase"
```

## Run

```bash
oo connector run "vimeo" --action "add_video_to_showcase" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Vimeo state. Confirm the exact payload and intended effect with the user before running.
