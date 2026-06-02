# Vapi · `list_evals`

List Vapi evals with pagination plus optional identifier and timestamp-based filters.

- **Service**: `vapi`
- **Action**: `list_evals`
- **Action id**: `vapi.list_evals`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "list_evals"
```

## Run

```bash
oo connector run "vapi" --action "list_evals" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
