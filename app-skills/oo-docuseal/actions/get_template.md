# DocuSeal · `get_template`

Retrieve one DocuSeal template by ID and return compact metadata with the raw template payload.

- **Service**: `docuseal`
- **Action**: `get_template`
- **Action id**: `docuseal.get_template`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docuseal" --action "get_template"
```

## Run

```bash
oo connector run "docuseal" --action "get_template" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
