# Foxit Cloud API · `upload_file`

Upload one source file to Foxit Cloud API and return the reusable Foxit document ID.

- **Service**: `fuxin`
- **Action**: `upload_file`
- **Action id**: `fuxin.upload_file`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fuxin" --action "upload_file"
```

## Run

```bash
oo connector run "fuxin" --action "upload_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Foxit Cloud API state. Confirm the exact payload and intended effect with the user before running.
