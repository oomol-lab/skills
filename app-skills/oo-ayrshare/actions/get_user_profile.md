# Ayrshare · `get_user_profile`

Get Ayrshare account or user profile details, including linked social accounts and usage metadata.

- **Service**: `ayrshare`
- **Action**: `get_user_profile`
- **Action id**: `ayrshare.get_user_profile`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ayrshare" --action "get_user_profile"
```

## Run

```bash
oo connector run "ayrshare" --action "get_user_profile" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
