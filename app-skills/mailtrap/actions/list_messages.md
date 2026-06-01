# Mailtrap · `list_messages`

List messages captured in one Mailtrap inbox.

- **Service**: `mailtrap`
- **Action**: `list_messages`
- **Action id**: `mailtrap.list_messages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "list_messages"
```

## Run

```bash
oo connector run "mailtrap" --action "list_messages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
