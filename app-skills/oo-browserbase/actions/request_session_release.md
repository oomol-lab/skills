# Browserbase · `request_session_release`

Request that Browserbase releases a session before timeout by sending status REQUEST_RELEASE.

- **Service**: `browserbase`
- **Action**: `request_session_release`
- **Action id**: `browserbase.request_session_release`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "browserbase" --action "request_session_release"
```

## Run

```bash
oo connector run "browserbase" --action "request_session_release" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
