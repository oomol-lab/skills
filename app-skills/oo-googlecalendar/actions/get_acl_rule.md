# Google Calendar · `get_acl_rule`

Fetch one ACL rule from a Google Calendar.

- **Service**: `googlecalendar`
- **Action**: `get_acl_rule`
- **Action id**: `googlecalendar.get_acl_rule`
- **Required scopes**: googlecalendar.acl.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlecalendar" --action "get_acl_rule"
```

## Run

```bash
oo connector run "googlecalendar" --action "get_acl_rule" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
