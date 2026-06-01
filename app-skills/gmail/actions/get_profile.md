# Gmail · `get_profile`

Get the connected Gmail profile, including mailbox totals and the current `historyId`. Use the returned `historyId` as the checkpoint for incremental sync via `list_history`.

- **Service**: `gmail`
- **Action**: `get_profile`
- **Action id**: `gmail.get_profile`
- **Required scopes**: gmail.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "get_profile"
```

## Run

```bash
oo connector run "gmail" --action "get_profile" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
