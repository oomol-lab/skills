# V2EX · `get_current_member`

Fetch the authenticated V2EX member profile.

- **Service**: `v2ex`
- **Action**: `get_current_member`
- **Action id**: `v2ex.get_current_member`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v2ex" --action "get_current_member"
```

## Run

```bash
oo connector run "v2ex" --action "get_current_member" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
