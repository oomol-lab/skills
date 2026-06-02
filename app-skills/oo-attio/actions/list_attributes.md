# Attio · `list_attributes`

List attributes defined on an Attio object or list.

- **Service**: `attio`
- **Action**: `list_attributes`
- **Action id**: `attio.list_attributes`
- **Required scopes**: object_configuration:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "attio" --action "list_attributes"
```

## Run

```bash
oo connector run "attio" --action "list_attributes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
