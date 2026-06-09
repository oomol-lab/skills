# YouTube · `download_caption`

Download a YouTube caption track and return a temporary transit URL.

- **Service**: `youtube`
- **Action**: `download_caption`
- **Action id**: `youtube.download_caption`
- **Required scopes**: youtube.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "youtube" --action "download_caption"
```

## Run

```bash
oo connector run "youtube" --action "download_caption" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
