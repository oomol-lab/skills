# Crowdin · `upload_file`

Upload a source file to Crowdin.

- **Service**: `crowdin`
- **Action**: `upload_file`
- **Action id**: `crowdin.upload_file`
- **Required scopes**: crowdin.source.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "crowdin" --action "upload_file"
```

## Run

```bash
oo connector run "crowdin" --action "upload_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Crowdin state. Confirm the exact payload and intended effect with the user before running.
