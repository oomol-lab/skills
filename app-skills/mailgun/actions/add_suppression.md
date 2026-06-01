# Mailgun · `add_suppression`

Add one Mailgun suppression or allowlist record.

- **Service**: `mailgun`
- **Action**: `add_suppression`
- **Action id**: `mailgun.add_suppression`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailgun" --action "add_suppression"
```

## Run

```bash
oo connector run "mailgun" --action "add_suppression" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mailgun state. Confirm the exact payload and intended effect with the user before running.
