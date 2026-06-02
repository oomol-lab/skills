# Linkup · `search_answer`

Search the web with Linkup and return a sourced natural-language answer.

- **Service**: `linkup`
- **Action**: `search_answer`
- **Action id**: `linkup.search_answer`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linkup" --action "search_answer"
```

## Run

```bash
oo connector run "linkup" --action "search_answer" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
