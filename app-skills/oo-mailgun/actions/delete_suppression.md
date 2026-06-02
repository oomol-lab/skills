# Mailgun · `delete_suppression`

Remove one Mailgun suppression or allowlist record.

- **Service**: `mailgun`
- **Action**: `delete_suppression`
- **Action id**: `mailgun.delete_suppression`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailgun" --action "delete_suppression"
```

## Run

```bash
oo connector run "mailgun" --action "delete_suppression" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Mailgun data. Always confirm the target and get explicit user approval before running.
