# Browserbase · `get_session`

Get one Browserbase session by session identifier.

- **Service**: `browserbase`
- **Action**: `get_session`
- **Action id**: `browserbase.get_session`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "browserbase" --action "get_session"
```

## Run

```bash
oo connector run "browserbase" --action "get_session" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
