# Plate Recognizer · `read_number_plates`

Read number plates from one image by calling Plate Recognizer Snapshot Cloud and returning normalized detections.

- **Service**: `platerecognizer`
- **Action**: `read_number_plates`
- **Action id**: `platerecognizer.read_number_plates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "platerecognizer" --action "read_number_plates"
```

## Run

```bash
oo connector run "platerecognizer" --action "read_number_plates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
