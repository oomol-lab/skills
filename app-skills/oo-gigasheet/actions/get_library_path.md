# Gigasheet · `get_library_path`

Return the parent directory chain for one Gigasheet file or folder handle.

- **Service**: `gigasheet`
- **Action**: `get_library_path`
- **Action id**: `gigasheet.get_library_path`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gigasheet" --action "get_library_path"
```

## Run

```bash
oo connector run "gigasheet" --action "get_library_path" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
