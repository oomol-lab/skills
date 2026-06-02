# Dovetail · `export_data`

Export a Dovetail data record in HTML or Markdown format.

- **Service**: `dovetail`
- **Action**: `export_data`
- **Action id**: `dovetail.export_data`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dovetail" --action "export_data"
```

## Run

```bash
oo connector run "dovetail" --action "export_data" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
