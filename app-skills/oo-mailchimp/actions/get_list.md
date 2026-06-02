# Mailchimp · `get_list`

Fetch a single Mailchimp audience/list by ID.

- **Service**: `mailchimp`
- **Action**: `get_list`
- **Action id**: `mailchimp.get_list`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailchimp" --action "get_list"
```

## Run

```bash
oo connector run "mailchimp" --action "get_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
