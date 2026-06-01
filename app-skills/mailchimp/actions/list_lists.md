# Mailchimp · `list_lists`

List Mailchimp audiences/lists visible to the current API key.

- **Service**: `mailchimp`
- **Action**: `list_lists`
- **Action id**: `mailchimp.list_lists`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailchimp" --action "list_lists"
```

## Run

```bash
oo connector run "mailchimp" --action "list_lists" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
