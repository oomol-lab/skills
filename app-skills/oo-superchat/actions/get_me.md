# Superchat · `get_me`

Retrieve the authenticated Superchat user and workspace summary.

- **Service**: `superchat`
- **Action**: `get_me`
- **Action id**: `superchat.get_me`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "superchat" --action "get_me"
```

## Run

```bash
oo connector run "superchat" --action "get_me" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
