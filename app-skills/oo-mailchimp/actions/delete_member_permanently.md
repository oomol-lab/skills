# Mailchimp · `delete_member_permanently`

Permanently delete a Mailchimp member from the specified audience/list.

- **Service**: `mailchimp`
- **Action**: `delete_member_permanently`
- **Action id**: `mailchimp.delete_member_permanently`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailchimp" --action "delete_member_permanently"
```

## Run

```bash
oo connector run "mailchimp" --action "delete_member_permanently" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Mailchimp data. Always confirm the target and get explicit user approval before running.
