# Userflow · `upsert_group`

Create or update one Userflow group.

- **Service**: `userflow`
- **Action**: `upsert_group`
- **Action id**: `userflow.upsert_group`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "userflow" --action "upsert_group"
```

## Run

```bash
oo connector run "userflow" --action "upsert_group" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Userflow state. Confirm the exact payload and intended effect with the user before running.
