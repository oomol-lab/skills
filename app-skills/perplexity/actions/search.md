# Perplexity · `search`

Search the web and return ranked raw results from Perplexity without LLM synthesis.

- **Service**: `perplexity`
- **Action**: `search`
- **Action id**: `perplexity.search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "perplexity" --action "search"
```

## Run

```bash
oo connector run "perplexity" --action "search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
