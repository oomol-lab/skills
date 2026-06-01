# Tavily · `extract`

Extract structured page content from one or more URLs with Tavily.

- **Service**: `tavily`
- **Action**: `extract`
- **Action id**: `tavily.extract`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tavily" --action "extract"
```

## Run

```bash
oo connector run "tavily" --action "extract" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
