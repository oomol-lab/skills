# Attio · `get_object`

Get one Attio object by object ID or API slug.

- **Service**: `attio`
- **Action**: `get_object`
- **Action id**: `attio.get_object`
- **Required scopes**: object_configuration:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "attio" --action "get_object"
```

## Run

```bash
oo connector run "attio" --action "get_object" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
