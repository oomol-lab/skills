# Streamtime · `create_job`

Create a Streamtime job linked to a company, rate card, and optional contact.

- **Service**: `streamtime`
- **Action**: `create_job`
- **Action id**: `streamtime.create_job`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "streamtime" --action "create_job"
```

## Run

```bash
oo connector run "streamtime" --action "create_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Streamtime state. Confirm the exact payload and intended effect with the user before running.
