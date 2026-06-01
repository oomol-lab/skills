# Convex · `list_custom_domains`

List custom domains configured for a Convex deployment.

- **Service**: `convex`
- **Action**: `list_custom_domains`
- **Action id**: `convex.list_custom_domains`
- **Required scopes**: convex.custom_domains.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "convex" --action "list_custom_domains"
```

## Run

```bash
oo connector run "convex" --action "list_custom_domains" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
