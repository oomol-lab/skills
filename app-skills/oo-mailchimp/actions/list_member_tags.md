# Mailchimp · `list_member_tags`

List tags currently attached to a Mailchimp member.

- **Service**: `mailchimp`
- **Action**: `list_member_tags`
- **Action id**: `mailchimp.list_member_tags`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailchimp" --action "list_member_tags"
```

## Run

```bash
oo connector run "mailchimp" --action "list_member_tags" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
