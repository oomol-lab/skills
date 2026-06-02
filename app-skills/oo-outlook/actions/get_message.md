# Outlook · `get_message`

Get a single Outlook message by message ID, including message metadata and optional body formatting.

- **Service**: `outlook`
- **Action**: `get_message`
- **Action id**: `outlook.get_message`
- **Required scopes**: outlook.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "outlook" --action "get_message"
```

## Run

```bash
oo connector run "outlook" --action "get_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
