# Roboflow · `detect_objects`

Run Roboflow hosted object detection for one project version using a public image URL or Base64 image content.

- **Service**: `roboflow`
- **Action**: `detect_objects`
- **Action id**: `roboflow.detect_objects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "roboflow" --action "detect_objects"
```

## Run

```bash
oo connector run "roboflow" --action "detect_objects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
