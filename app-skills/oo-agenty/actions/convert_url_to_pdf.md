# Agenty · `convert_url_to_pdf`

Convert one web page into a PDF document and return a downloadable file.

- **Service**: `agenty`
- **Action**: `convert_url_to_pdf`
- **Action id**: `agenty.convert_url_to_pdf`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agenty" --action "convert_url_to_pdf"
```

## Run

```bash
oo connector run "agenty" --action "convert_url_to_pdf" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
