# Browserless · `generate_pdf`

Generate a Browserless PDF file and return it as base64 content.

- **Service**: `browserless`
- **Action**: `generate_pdf`
- **Action id**: `browserless.generate_pdf`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "browserless" --action "generate_pdf"
```

## Run

```bash
oo connector run "browserless" --action "generate_pdf" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
