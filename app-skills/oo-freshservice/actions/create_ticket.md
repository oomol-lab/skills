# Freshservice · `create_ticket`

Create a Freshservice ticket for an incident or service request workflow.

- **Service**: `freshservice`
- **Action**: `create_ticket`
- **Action id**: `freshservice.create_ticket`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "freshservice" --action "create_ticket"
```

## Run

```bash
oo connector run "freshservice" --action "create_ticket" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Freshservice state. Confirm the exact payload and intended effect with the user before running.
