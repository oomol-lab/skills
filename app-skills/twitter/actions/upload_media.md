# Twitter · `upload_media`

Upload a single image to X and return the created media identifiers.

- **Service**: `twitter`
- **Action**: `upload_media`
- **Action id**: `twitter.upload_media`
- **Required scopes**: twitter.media.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "upload_media"
```

## Run

```bash
oo connector run "twitter" --action "upload_media" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Twitter state. Confirm the exact payload and intended effect with the user before running.
