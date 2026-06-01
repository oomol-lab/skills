# Vapi · `list_scorecards`

List Vapi scorecards with pagination plus optional identifier and timestamp filters.

- **Service**: `vapi`
- **Action**: `list_scorecards`
- **Action id**: `vapi.list_scorecards`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "list_scorecards"
```

## Run

```bash
oo connector run "vapi" --action "list_scorecards" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
