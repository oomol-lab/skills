# Docmosis · `get_template_details`

Get the stored metadata for one uploaded Docmosis template without downloading the template file.

- **Service**: `docmosis`
- **Action**: `get_template_details`
- **Action id**: `docmosis.get_template_details`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docmosis" --action "get_template_details"
```

## Run

```bash
oo connector run "docmosis" --action "get_template_details" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
