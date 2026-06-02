# Twitter · `get_recent_dm_events`

Get recent Direct Message events for the authenticated user account.

- **Service**: `twitter`
- **Action**: `get_recent_dm_events`
- **Action id**: `twitter.get_recent_dm_events`
- **Required scopes**: twitter.dm.read, twitter.tweet.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "get_recent_dm_events"
```

## Run

```bash
oo connector run "twitter" --action "get_recent_dm_events" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
