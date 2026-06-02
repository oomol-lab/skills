# Vapi · `list_assistants`

List Vapi assistants with optional created/updated timestamp filters and a configurable page size.

- **Service**: `vapi`
- **Action**: `list_assistants`
- **Action id**: `vapi.list_assistants`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "list_assistants"
```

## Run

```bash
oo connector run "vapi" --action "list_assistants" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
