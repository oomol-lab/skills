# Emailable · `verify_batch_emails`

Create an Emailable batch verification job for a list of email addresses.

- **Service**: `emailable`
- **Action**: `verify_batch_emails`
- **Action id**: `emailable.verify_batch_emails`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "emailable" --action "verify_batch_emails"
```

## Run

```bash
oo connector run "emailable" --action "verify_batch_emails" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
