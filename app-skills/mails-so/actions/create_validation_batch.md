# Mails · `create_validation_batch`

Create one Mails batch validation job for a list of email addresses.

- **Service**: `mails_so`
- **Action**: `create_validation_batch`
- **Action id**: `mails_so.create_validation_batch`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mails_so" --action "create_validation_batch"
```

## Run

```bash
oo connector run "mails_so" --action "create_validation_batch" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mails state. Confirm the exact payload and intended effect with the user before running.
