# Mailtrap · `reset_inbox_credentials`

Reset SMTP credentials for one Mailtrap inbox.

- **Service**: `mailtrap`
- **Action**: `reset_inbox_credentials`
- **Action id**: `mailtrap.reset_inbox_credentials`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "reset_inbox_credentials"
```

## Run

```bash
oo connector run "mailtrap" --action "reset_inbox_credentials" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
