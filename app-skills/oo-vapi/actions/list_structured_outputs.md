# Vapi · `list_structured_outputs`

List Vapi structured outputs with pagination plus optional identifier, name, and timestamp filters.

- **Service**: `vapi`
- **Action**: `list_structured_outputs`
- **Action id**: `vapi.list_structured_outputs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "list_structured_outputs"
```

## Run

```bash
oo connector run "vapi" --action "list_structured_outputs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
