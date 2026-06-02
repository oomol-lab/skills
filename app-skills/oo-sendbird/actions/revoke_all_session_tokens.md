# Sendbird · `revoke_all_session_tokens`

Revoke all Sendbird session tokens for a user.

- **Service**: `sendbird`
- **Action**: `revoke_all_session_tokens`
- **Action id**: `sendbird.revoke_all_session_tokens`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendbird" --action "revoke_all_session_tokens"
```

## Run

```bash
oo connector run "sendbird" --action "revoke_all_session_tokens" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Sendbird data. Always confirm the target and get explicit user approval before running.
