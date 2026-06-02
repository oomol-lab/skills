# Sendbird · `list_banned_members`

List banned users from a Sendbird group channel.

- **Service**: `sendbird`
- **Action**: `list_banned_members`
- **Action id**: `sendbird.list_banned_members`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendbird" --action "list_banned_members"
```

## Run

```bash
oo connector run "sendbird" --action "list_banned_members" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
