# APIVerve · `get_word_definition`

Get definitions for a word using APIVerve Dictionary.

- **Service**: `apiverve`
- **Action**: `get_word_definition`
- **Action id**: `apiverve.get_word_definition`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apiverve" --action "get_word_definition"
```

## Run

```bash
oo connector run "apiverve" --action "get_word_definition" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
