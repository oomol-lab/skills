# Quo · `get_message`

Get details for a Quo message by ID.

- **Service**: `quo`
- **Action**: `get_message`
- **Action id**: `quo.get_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "quo" --action "get_message"
```

## Run

```bash
oo connector run "quo" --action "get_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
