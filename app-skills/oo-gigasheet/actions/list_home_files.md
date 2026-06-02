# Gigasheet · `list_home_files`

List the suggested recent files shown on the Gigasheet home page.

- **Service**: `gigasheet`
- **Action**: `list_home_files`
- **Action id**: `gigasheet.list_home_files`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gigasheet" --action "list_home_files"
```

## Run

```bash
oo connector run "gigasheet" --action "list_home_files" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
