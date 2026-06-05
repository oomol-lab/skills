# Fillout · `get_form_metadata`

Get metadata and configured questions for one Fillout form.

- **Service**: `fillout`
- **Action**: `get_form_metadata`
- **Action id**: `fillout.get_form_metadata`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fillout" --action "get_form_metadata"
```

## Run

```bash
oo connector run "fillout" --action "get_form_metadata" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
