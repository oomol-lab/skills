# Exa · `answer`

Generate a citation-backed answer from Exa search results.

- **Service**: `exa`
- **Action**: `answer`
- **Action id**: `exa.answer`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "exa" --action "answer"
```

## Run

```bash
oo connector run "exa" --action "answer" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
