# Mailchimp · `archive_member`

Archive a Mailchimp member from the specified audience/list.

- **Service**: `mailchimp`
- **Action**: `archive_member`
- **Action id**: `mailchimp.archive_member`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailchimp" --action "archive_member"
```

## Run

```bash
oo connector run "mailchimp" --action "archive_member" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
