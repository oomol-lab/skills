# Mailtrap · `update_inbox`

Update one Mailtrap inbox.

- **Service**: `mailtrap`
- **Action**: `update_inbox`
- **Action id**: `mailtrap.update_inbox`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "update_inbox"
```

## Run

```bash
oo connector run "mailtrap" --action "update_inbox" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mailtrap state. Confirm the exact payload and intended effect with the user before running.
