# Google Calendar · `delete_acl_rule`

Delete an ACL rule from a Google Calendar.

- **Service**: `googlecalendar`
- **Action**: `delete_acl_rule`
- **Action id**: `googlecalendar.delete_acl_rule`
- **Required scopes**: googlecalendar.acl.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlecalendar" --action "delete_acl_rule"
```

## Run

```bash
oo connector run "googlecalendar" --action "delete_acl_rule" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Calendar data. Always confirm the target and get explicit user approval before running.
