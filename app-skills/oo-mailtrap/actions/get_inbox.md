# Mailtrap · `get_inbox`

Get one Mailtrap inbox by ID.

- **Service**: `mailtrap`
- **Action**: `get_inbox`
- **Action id**: `mailtrap.get_inbox`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "get_inbox"
```

## Run

```bash
oo connector run "mailtrap" --action "get_inbox" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
