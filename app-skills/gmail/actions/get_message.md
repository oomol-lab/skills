# Gmail · `get_message`

Get a Gmail message by message ID with a simplified normalized output. Use this when you only need subject, from, to, date, and body.

- **Service**: `gmail`
- **Action**: `get_message`
- **Action id**: `gmail.get_message`
- **Required scopes**: gmail.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "get_message"
```

## Run

```bash
oo connector run "gmail" --action "get_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
