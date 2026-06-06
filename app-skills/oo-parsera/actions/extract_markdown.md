# Parsera · `extract_markdown`

Extract clean Markdown from a webpage URL with Parsera.

- **Service**: `parsera`
- **Action**: `extract_markdown`
- **Action id**: `parsera.extract_markdown`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "parsera" --action "extract_markdown"
```

## Run

```bash
oo connector run "parsera" --action "extract_markdown" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
