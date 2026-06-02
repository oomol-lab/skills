# Vapi · `list_provider_resources`

List Vapi provider resources for a provider and resource type with optional identifier and timestamp filters.

- **Service**: `vapi`
- **Action**: `list_provider_resources`
- **Action id**: `vapi.list_provider_resources`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "list_provider_resources"
```

## Run

```bash
oo connector run "vapi" --action "list_provider_resources" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
