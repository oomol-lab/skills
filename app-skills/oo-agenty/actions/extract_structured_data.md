# Agenty · `extract_structured_data`

Extract structured metadata such as JSON-LD, RDFa, microdata, and meta tags.

- **Service**: `agenty`
- **Action**: `extract_structured_data`
- **Action id**: `agenty.extract_structured_data`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agenty" --action "extract_structured_data"
```

## Run

```bash
oo connector run "agenty" --action "extract_structured_data" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
