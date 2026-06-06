# Parsera · `parse`

Parse structured attributes from raw HTML or text content already available to the caller.

- **Service**: `parsera`
- **Action**: `parse`
- **Action id**: `parsera.parse`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "parsera" --action "parse"
```

## Run

```bash
oo connector run "parsera" --action "parse" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
