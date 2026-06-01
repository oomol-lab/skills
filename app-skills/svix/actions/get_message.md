# Svix · `get_message`

Fetch one Svix message by application and message identifier.

- **Service**: `svix`
- **Action**: `get_message`
- **Action id**: `svix.get_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "svix" --action "get_message"
```

## Run

```bash
oo connector run "svix" --action "get_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
