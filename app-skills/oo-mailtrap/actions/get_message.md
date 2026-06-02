# Mailtrap · `get_message`

Get one Mailtrap inbox message by ID.

- **Service**: `mailtrap`
- **Action**: `get_message`
- **Action id**: `mailtrap.get_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "get_message"
```

## Run

```bash
oo connector run "mailtrap" --action "get_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
