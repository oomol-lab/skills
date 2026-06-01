# Exa · `get_contents`

Fetch text, highlights, or summaries from Exa for URLs or document IDs.

- **Service**: `exa`
- **Action**: `get_contents`
- **Action id**: `exa.get_contents`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "exa" --action "get_contents"
```

## Run

```bash
oo connector run "exa" --action "get_contents" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
