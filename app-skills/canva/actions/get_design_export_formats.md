# Canva · `get_design_export_formats`

List the file formats currently available for exporting a Canva design.

- **Service**: `canva`
- **Action**: `get_design_export_formats`
- **Action id**: `canva.get_design_export_formats`
- **Required scopes**: canva.design.content.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "canva" --action "get_design_export_formats"
```

## Run

```bash
oo connector run "canva" --action "get_design_export_formats" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
