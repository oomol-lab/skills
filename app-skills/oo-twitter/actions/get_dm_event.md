# Twitter · `get_dm_event`

Get a Direct Message event by event ID and optional expanded objects.

- **Service**: `twitter`
- **Action**: `get_dm_event`
- **Action id**: `twitter.get_dm_event`
- **Required scopes**: twitter.dm.read, twitter.tweet.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "get_dm_event"
```

## Run

```bash
oo connector run "twitter" --action "get_dm_event" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
