# Sendbird · `issue_session_token`

Issue a Sendbird session token for a user.

- **Service**: `sendbird`
- **Action**: `issue_session_token`
- **Action id**: `sendbird.issue_session_token`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendbird" --action "issue_session_token"
```

## Run

```bash
oo connector run "sendbird" --action "issue_session_token" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
