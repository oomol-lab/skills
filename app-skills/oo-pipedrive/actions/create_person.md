# Pipedrive · `create_person`

Create a Pipedrive person with emails, phones, labels, and optional custom fields.

- **Service**: `pipedrive`
- **Action**: `create_person`
- **Action id**: `pipedrive.create_person`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pipedrive" --action "create_person"
```

## Run

```bash
oo connector run "pipedrive" --action "create_person" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Pipedrive state. Confirm the exact payload and intended effect with the user before running.
