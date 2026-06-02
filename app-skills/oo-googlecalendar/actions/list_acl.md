# Google Calendar · `list_acl`

List ACL rules for a Google Calendar.

- **Service**: `googlecalendar`
- **Action**: `list_acl`
- **Action id**: `googlecalendar.list_acl`
- **Required scopes**: googlecalendar.acl.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlecalendar" --action "list_acl"
```

## Run

```bash
oo connector run "googlecalendar" --action "list_acl" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
