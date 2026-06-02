# Chatwork · `get_me`

Get the authenticated Chatwork profile.

- **Service**: `chatwork`
- **Action**: `get_me`
- **Action id**: `chatwork.get_me`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatwork" --action "get_me"
```

## Run

```bash
oo connector run "chatwork" --action "get_me" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
