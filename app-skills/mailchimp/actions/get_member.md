# Mailchimp · `get_member`

Fetch a single Mailchimp member by subscriber hash or email address.

- **Service**: `mailchimp`
- **Action**: `get_member`
- **Action id**: `mailchimp.get_member`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailchimp" --action "get_member"
```

## Run

```bash
oo connector run "mailchimp" --action "get_member" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
