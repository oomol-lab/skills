# Twitter · `retrieve_dm_conversation_events`

Get Direct Message events for a Direct Message conversation ID.

- **Service**: `twitter`
- **Action**: `retrieve_dm_conversation_events`
- **Action id**: `twitter.retrieve_dm_conversation_events`
- **Required scopes**: twitter.dm.read, twitter.tweet.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "retrieve_dm_conversation_events"
```

## Run

```bash
oo connector run "twitter" --action "retrieve_dm_conversation_events" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
