# SwaggerHub · `list_owner_apis`

List SwaggerHub APIs that belong to a specific owner.

- **Service**: `swaggerhub`
- **Action**: `list_owner_apis`
- **Action id**: `swaggerhub.list_owner_apis`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "swaggerhub" --action "list_owner_apis"
```

## Run

```bash
oo connector run "swaggerhub" --action "list_owner_apis" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
