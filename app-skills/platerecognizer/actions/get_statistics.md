# Plate Recognizer · `get_statistics`

Retrieve current-month Plate Recognizer Snapshot Cloud usage and reset information.

- **Service**: `platerecognizer`
- **Action**: `get_statistics`
- **Action id**: `platerecognizer.get_statistics`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "platerecognizer" --action "get_statistics"
```

## Run

```bash
oo connector run "platerecognizer" --action "get_statistics" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
