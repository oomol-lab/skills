# CraftMyPDF · `get_template`

Get the raw CraftMyPDF template body and sample JSON for one template ID.

- **Service**: `craftmypdf`
- **Action**: `get_template`
- **Action id**: `craftmypdf.get_template`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "craftmypdf" --action "get_template"
```

## Run

```bash
oo connector run "craftmypdf" --action "get_template" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
