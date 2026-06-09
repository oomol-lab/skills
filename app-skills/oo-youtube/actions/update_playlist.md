# YouTube · `update_playlist`

Update a YouTube playlist's snippet and status metadata.

- **Service**: `youtube`
- **Action**: `update_playlist`
- **Action id**: `youtube.update_playlist`
- **Required scopes**: youtube.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "youtube" --action "update_playlist"
```

## Run

```bash
oo connector run "youtube" --action "update_playlist" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes YouTube state. Confirm the exact payload and intended effect with the user before running.
