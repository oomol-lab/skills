# Gigasheet · `describe_dataset`

Describe one Gigasheet dataset, including status and file metadata.

- **Service**: `gigasheet`
- **Action**: `describe_dataset`
- **Action id**: `gigasheet.describe_dataset`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gigasheet" --action "describe_dataset"
```

## Run

```bash
oo connector run "gigasheet" --action "describe_dataset" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
