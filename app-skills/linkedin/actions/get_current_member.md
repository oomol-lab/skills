# LinkedIn · `get_current_member`

Retrieve the authenticated LinkedIn member's OpenID Connect profile.

- **Service**: `linkedin`
- **Action**: `get_current_member`
- **Action id**: `linkedin.get_current_member`
- **Required scopes**: linkedin.member.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linkedin" --action "get_current_member"
```

## Run

```bash
oo connector run "linkedin" --action "get_current_member" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
