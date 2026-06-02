# TextRazor · `extract_entities`

Extract named entities from text using the official TextRazor entities extractor.

- **Service**: `textrazor`
- **Action**: `extract_entities`
- **Action id**: `textrazor.extract_entities`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "textrazor" --action "extract_entities"
```

## Run

```bash
oo connector run "textrazor" --action "extract_entities" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
