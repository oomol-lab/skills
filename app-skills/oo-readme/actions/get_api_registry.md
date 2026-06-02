# ReadMe · `get_api_registry`

Retrieve one ReadMe API Registry entry by UUID.

- **Service**: `readme`
- **Action**: `get_api_registry`
- **Action id**: `readme.get_api_registry`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "readme" --action "get_api_registry"
```

## Run

```bash
oo connector run "readme" --action "get_api_registry" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
