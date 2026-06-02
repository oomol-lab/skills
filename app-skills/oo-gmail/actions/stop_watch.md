# Gmail · `stop_watch`

Stop Gmail push watch notifications for the mailbox. Use this to disable notifications that were previously created via the watch endpoint.

- **Service**: `gmail`
- **Action**: `stop_watch`
- **Action id**: `gmail.stop_watch`
- **Required scopes**: gmail.modify

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "stop_watch"
```

## Run

```bash
oo connector run "gmail" --action "stop_watch" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
