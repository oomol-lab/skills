# Hacker News · `get_user_by_username`

Get a Hacker News user's detailed public profile by username.

- **Service**: `hackernews`
- **Action**: `get_user_by_username`
- **Action id**: `hackernews.get_user_by_username`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hackernews" --action "get_user_by_username"
```

## Run

```bash
oo connector run "hackernews" --action "get_user_by_username" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
