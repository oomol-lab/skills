# Vapi · `list_insights`

List Vapi insights with pagination plus optional identifier and timestamp filters.

- **Service**: `vapi`
- **Action**: `list_insights`
- **Action id**: `vapi.list_insights`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "list_insights"
```

## Run

```bash
oo connector run "vapi" --action "list_insights" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
