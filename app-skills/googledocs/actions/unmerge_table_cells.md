# Google Docs · `unmerge_table_cells`

Unmerge previously merged table cells in a Google Docs document.

- **Service**: `googledocs`
- **Action**: `unmerge_table_cells`
- **Action id**: `googledocs.unmerge_table_cells`
- **Required scopes**: googledocs.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledocs" --action "unmerge_table_cells"
```

## Run

```bash
oo connector run "googledocs" --action "unmerge_table_cells" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
