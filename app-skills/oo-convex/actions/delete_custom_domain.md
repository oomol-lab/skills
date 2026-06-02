# Convex · `delete_custom_domain`

Remove a custom domain from a Convex deployment.

- **Service**: `convex`
- **Action**: `delete_custom_domain`
- **Action id**: `convex.delete_custom_domain`
- **Required scopes**: convex.custom_domains.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "convex" --action "delete_custom_domain"
```

## Run

```bash
oo connector run "convex" --action "delete_custom_domain" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Convex data. Always confirm the target and get explicit user approval before running.
