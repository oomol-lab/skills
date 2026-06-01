# Mailchimp · `list_members`

List members in a Mailchimp audience/list.

- **Service**: `mailchimp`
- **Action**: `list_members`
- **Action id**: `mailchimp.list_members`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailchimp" --action "list_members"
```

## Run

```bash
oo connector run "mailchimp" --action "list_members" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
