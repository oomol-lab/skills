# Trello · `update_list`

Update a Trello list name or position.

- **Service**: `trello`
- **Action**: `update_list`
- **Action id**: `trello.update_list`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "trello" --action "update_list"
```

## Run

```bash
oo connector run "trello" --action "update_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Trello state. Confirm the exact payload and intended effect with the user before running.
