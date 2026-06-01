# RenderForm · `list_results`

List RenderForm generated results with pagination and optional template or batch filters.

- **Service**: `renderform`
- **Action**: `list_results`
- **Action id**: `renderform.list_results`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "renderform" --action "list_results"
```

## Run

```bash
oo connector run "renderform" --action "list_results" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
