# Baidu Qianfan · `upload_file`

Upload a file to Baidu Qianfan for batch or other file-based APIs.

- **Service**: `qianfan`
- **Action**: `upload_file`
- **Action id**: `qianfan.upload_file`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "qianfan" --action "upload_file"
```

## Run

```bash
oo connector run "qianfan" --action "upload_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Baidu Qianfan state. Confirm the exact payload and intended effect with the user before running.
