# Vapi · `upload_file`

Upload a file to Vapi knowledge storage from a public URL or base64 payload and return the resulting file metadata.

- **Service**: `vapi`
- **Action**: `upload_file`
- **Action id**: `vapi.upload_file`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "upload_file"
```

## Run

```bash
oo connector run "vapi" --action "upload_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Vapi state. Confirm the exact payload and intended effect with the user before running.
