# Needle · `add_files_to_collection`

Import one or more URL-backed files into a Needle collection for indexing.

- **Service**: `needle`
- **Action**: `add_files_to_collection`
- **Action id**: `needle.add_files_to_collection`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "needle" --action "add_files_to_collection"
```

## Run

```bash
oo connector run "needle" --action "add_files_to_collection" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Needle state. Confirm the exact payload and intended effect with the user before running.
