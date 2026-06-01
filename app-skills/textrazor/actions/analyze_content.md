# TextRazor · `analyze_content`

Analyze text with one or more TextRazor extractors and return the official analysis payload.

- **Service**: `textrazor`
- **Action**: `analyze_content`
- **Action id**: `textrazor.analyze_content`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "textrazor" --action "analyze_content"
```

## Run

```bash
oo connector run "textrazor" --action "analyze_content" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
