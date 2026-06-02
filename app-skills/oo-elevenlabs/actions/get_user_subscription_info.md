# ElevenLabs · `get_user_subscription_info`

Get the current ElevenLabs subscription details for the authenticated user.

- **Service**: `elevenlabs`
- **Action**: `get_user_subscription_info`
- **Action id**: `elevenlabs.get_user_subscription_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "elevenlabs" --action "get_user_subscription_info"
```

## Run

```bash
oo connector run "elevenlabs" --action "get_user_subscription_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
