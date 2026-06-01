# HeyGen · `get_remaining_quota`

Retrieve the remaining generation quota for the authenticated HeyGen account.

- **Service**: `heygen`
- **Action**: `get_remaining_quota`
- **Action id**: `heygen.get_remaining_quota`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "heygen" --action "get_remaining_quota"
```

## Run

```bash
oo connector run "heygen" --action "get_remaining_quota" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
