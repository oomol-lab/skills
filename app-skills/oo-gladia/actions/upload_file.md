# Gladia · `upload_file`

Upload an audio or video file up to 100 MiB to Gladia from a local file path, connector transit file, base64 content, or public URL.

- **Service**: `gladia`
- **Action**: `upload_file`
- **Action id**: `gladia.upload_file`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gladia" --action "upload_file"
```

## Run

```bash
oo connector run "gladia" --action "upload_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Gladia state. Confirm the exact payload and intended effect with the user before running.
