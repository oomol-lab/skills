# HeyGen · `upload_asset`

Upload an image, video, or audio file to HeyGen and return an asset ID usable in video generation.

- **Service**: `heygen`
- **Action**: `upload_asset`
- **Action id**: `heygen.upload_asset`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "heygen" --action "upload_asset"
```

## Run

```bash
oo connector run "heygen" --action "upload_asset" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes HeyGen state. Confirm the exact payload and intended effect with the user before running.
