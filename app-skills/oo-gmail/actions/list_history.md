# Gmail · `list_history`

List Gmail mailbox change history after a known `startHistoryId`. Use this for incremental sync and checkpoint the latest returned `historyId`.

- **Service**: `gmail`
- **Action**: `list_history`
- **Action id**: `gmail.list_history`
- **Required scopes**: gmail.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "list_history"
```

## Run

```bash
oo connector run "gmail" --action "list_history" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
