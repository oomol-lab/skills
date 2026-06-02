# Attio · `list_objects`

List all system-defined and user-defined objects in an Attio workspace.

- **Service**: `attio`
- **Action**: `list_objects`
- **Action id**: `attio.list_objects`
- **Required scopes**: object_configuration:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "attio" --action "list_objects"
```

## Run

```bash
oo connector run "attio" --action "list_objects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
