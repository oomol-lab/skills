# Delighted · `create_or_update_person`

Create or update a Delighted person and optionally schedule a survey request.

- **Service**: `delighted`
- **Action**: `create_or_update_person`
- **Action id**: `delighted.create_or_update_person`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "delighted" --action "create_or_update_person"
```

## Run

```bash
oo connector run "delighted" --action "create_or_update_person" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Delighted state. Confirm the exact payload and intended effect with the user before running.
