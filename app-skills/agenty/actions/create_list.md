# Agenty · `create_list`

Create one Agenty list.

- **Service**: `agenty`
- **Action**: `create_list`
- **Action id**: `agenty.create_list`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agenty" --action "create_list"
```

## Run

```bash
oo connector run "agenty" --action "create_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Agenty state. Confirm the exact payload and intended effect with the user before running.
