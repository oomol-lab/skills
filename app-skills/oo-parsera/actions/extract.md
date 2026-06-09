# Parsera · `extract`

Extract structured data from a webpage URL with Parsera using a prompt, attributes, or both.

- **Service**: `parsera`
- **Action**: `extract`
- **Action id**: `parsera.extract`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "parsera" --action "extract"
```

## Run

```bash
oo connector run "parsera" --action "extract" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
