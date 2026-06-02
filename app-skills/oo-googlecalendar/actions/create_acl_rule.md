# Google Calendar · `create_acl_rule`

Create an ACL rule on a Google Calendar.

- **Service**: `googlecalendar`
- **Action**: `create_acl_rule`
- **Action id**: `googlecalendar.create_acl_rule`
- **Required scopes**: googlecalendar.acl.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlecalendar" --action "create_acl_rule"
```

## Run

```bash
oo connector run "googlecalendar" --action "create_acl_rule" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Calendar state. Confirm the exact payload and intended effect with the user before running.
