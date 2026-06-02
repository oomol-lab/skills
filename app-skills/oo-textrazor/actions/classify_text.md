# TextRazor · `classify_text`

Classify text with one or more TextRazor classifiers and return the official categories payload.

- **Service**: `textrazor`
- **Action**: `classify_text`
- **Action id**: `textrazor.classify_text`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "textrazor" --action "classify_text"
```

## Run

```bash
oo connector run "textrazor" --action "classify_text" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
