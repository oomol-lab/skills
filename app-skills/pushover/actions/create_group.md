# Pushover · `create_group`

Create a new Pushover delivery group.

- **Service**: `pushover`
- **Action**: `create_group`
- **Action id**: `pushover.create_group`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushover" --action "create_group"
```

## Run

```bash
oo connector run "pushover" --action "create_group" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Pushover state. Confirm the exact payload and intended effect with the user before running.
