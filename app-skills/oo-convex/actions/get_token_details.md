# Convex · `get_token_details`

Return the current Convex token details so you can discover the authorized team or project context.

- **Service**: `convex`
- **Action**: `get_token_details`
- **Action id**: `convex.get_token_details`
- **Required scopes**: convex.token.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "convex" --action "get_token_details"
```

## Run

```bash
oo connector run "convex" --action "get_token_details" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
