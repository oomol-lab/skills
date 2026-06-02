# Hacker News · `get_user`

Get a Hacker News user's public profile summary by username.

- **Service**: `hackernews`
- **Action**: `get_user`
- **Action id**: `hackernews.get_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hackernews" --action "get_user"
```

## Run

```bash
oo connector run "hackernews" --action "get_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
