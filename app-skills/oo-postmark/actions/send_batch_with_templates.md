# Postmark · `send_batch_with_templates`

Send up to 500 templated emails in a single Postmark batch request.

- **Service**: `postmark`
- **Action**: `send_batch_with_templates`
- **Action id**: `postmark.send_batch_with_templates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postmark" --action "send_batch_with_templates"
```

## Run

```bash
oo connector run "postmark" --action "send_batch_with_templates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postmark state. Confirm the exact payload and intended effect with the user before running.
