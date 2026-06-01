# Trello · `add_checkitem`

Add a check item to a Trello checklist.

- **Service**: `trello`
- **Action**: `add_checkitem`
- **Action id**: `trello.add_checkitem`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "trello" --action "add_checkitem"
```

## Run

```bash
oo connector run "trello" --action "add_checkitem" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Trello state. Confirm the exact payload and intended effect with the user before running.
