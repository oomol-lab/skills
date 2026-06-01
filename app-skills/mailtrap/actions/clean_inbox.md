# Mailtrap · `clean_inbox`

Delete all messages from one Mailtrap inbox.

- **Service**: `mailtrap`
- **Action**: `clean_inbox`
- **Action id**: `mailtrap.clean_inbox`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "clean_inbox"
```

## Run

```bash
oo connector run "mailtrap" --action "clean_inbox" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
