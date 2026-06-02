# Sendbird · `delete_channel`

Delete a Sendbird group channel.

- **Service**: `sendbird`
- **Action**: `delete_channel`
- **Action id**: `sendbird.delete_channel`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendbird" --action "delete_channel"
```

## Run

```bash
oo connector run "sendbird" --action "delete_channel" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Sendbird data. Always confirm the target and get explicit user approval before running.
