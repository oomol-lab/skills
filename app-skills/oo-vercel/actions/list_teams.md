# Vercel · `list_teams`

List Vercel teams available to the authenticated user.

- **Service**: `vercel`
- **Action**: `list_teams`
- **Action id**: `vercel.list_teams`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vercel" --action "list_teams"
```

## Run

```bash
oo connector run "vercel" --action "list_teams" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
