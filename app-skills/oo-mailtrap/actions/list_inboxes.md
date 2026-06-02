# Mailtrap · `list_inboxes`

List Mailtrap inboxes under one account.

- **Service**: `mailtrap`
- **Action**: `list_inboxes`
- **Action id**: `mailtrap.list_inboxes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "list_inboxes"
```

## Run

```bash
oo connector run "mailtrap" --action "list_inboxes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
