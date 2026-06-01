# Dev.to · `get_organization`

Get Dev.to organization profile.

- **Service**: `devto`
- **Action**: `get_organization`
- **Action id**: `devto.get_organization`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "devto" --action "get_organization"
```

## Run

```bash
oo connector run "devto" --action "get_organization" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
