# Sendbird · `view_message`

Get a single Sendbird group channel message by message ID.

- **Service**: `sendbird`
- **Action**: `view_message`
- **Action id**: `sendbird.view_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendbird" --action "view_message"
```

## Run

```bash
oo connector run "sendbird" --action "view_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
