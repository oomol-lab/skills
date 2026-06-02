# Trello · `archive_list`

Archive a Trello list.

- **Service**: `trello`
- **Action**: `archive_list`
- **Action id**: `trello.archive_list`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "trello" --action "archive_list"
```

## Run

```bash
oo connector run "trello" --action "archive_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
