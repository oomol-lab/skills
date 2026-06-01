# Svix · `list_endpoints`

List endpoints attached to a Svix application.

- **Service**: `svix`
- **Action**: `list_endpoints`
- **Action id**: `svix.list_endpoints`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "svix" --action "list_endpoints"
```

## Run

```bash
oo connector run "svix" --action "list_endpoints" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
