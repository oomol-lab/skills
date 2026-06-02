# Outlook · `list_messages`

List Outlook messages from the mailbox or from a specific mail folder, with support for OData filters, sorting, field selection, and pagination.

- **Service**: `outlook`
- **Action**: `list_messages`
- **Action id**: `outlook.list_messages`
- **Required scopes**: outlook.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "outlook" --action "list_messages"
```

## Run

```bash
oo connector run "outlook" --action "list_messages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
