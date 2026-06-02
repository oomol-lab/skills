# Calendly · `create_share`

Create one customized single-use share from an existing Calendly event type.

- **Service**: `calendly`
- **Action**: `create_share`
- **Action id**: `calendly.create_share`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "create_share"
```

## Run

```bash
oo connector run "calendly" --action "create_share" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Calendly state. Confirm the exact payload and intended effect with the user before running.
