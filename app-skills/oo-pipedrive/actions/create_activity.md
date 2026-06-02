# Pipedrive · `create_activity`

Create a Pipedrive activity with subject, due date, linked records, participants, attendees, and notes.

- **Service**: `pipedrive`
- **Action**: `create_activity`
- **Action id**: `pipedrive.create_activity`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pipedrive" --action "create_activity"
```

## Run

```bash
oo connector run "pipedrive" --action "create_activity" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Pipedrive state. Confirm the exact payload and intended effect with the user before running.
