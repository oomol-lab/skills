# YouTube · `set_thumbnail_from_url`

Upload and set a custom YouTube video thumbnail from an HTTPS image URL.

- **Service**: `youtube`
- **Action**: `set_thumbnail_from_url`
- **Action id**: `youtube.set_thumbnail_from_url`
- **Required scopes**: youtube.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "youtube" --action "set_thumbnail_from_url"
```

## Run

```bash
oo connector run "youtube" --action "set_thumbnail_from_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes YouTube state. Confirm the exact payload and intended effect with the user before running.
