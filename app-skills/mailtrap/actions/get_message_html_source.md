# Mailtrap · `get_message_html_source`

Get the raw HTML source of one Mailtrap inbox message.

- **Service**: `mailtrap`
- **Action**: `get_message_html_source`
- **Action id**: `mailtrap.get_message_html_source`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "get_message_html_source"
```

## Run

```bash
oo connector run "mailtrap" --action "get_message_html_source" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
