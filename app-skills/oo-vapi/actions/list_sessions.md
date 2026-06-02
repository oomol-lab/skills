# Vapi · `list_sessions`

List Vapi sessions with pagination plus optional identifier, name, assistant, workflow, squad, and timestamp filters.

- **Service**: `vapi`
- **Action**: `list_sessions`
- **Action id**: `vapi.list_sessions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "list_sessions"
```

## Run

```bash
oo connector run "vapi" --action "list_sessions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
