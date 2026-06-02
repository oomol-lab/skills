# Vercel · `get_team`

Get a Vercel team by id or slug.

- **Service**: `vercel`
- **Action**: `get_team`
- **Action id**: `vercel.get_team`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vercel" --action "get_team"
```

## Run

```bash
oo connector run "vercel" --action "get_team" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
