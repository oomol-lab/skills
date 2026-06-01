# Habitica · `get_user_profile`

Get the authenticated Habitica user's profile with optional userFields filtering.

- **Service**: `habitica`
- **Action**: `get_user_profile`
- **Action id**: `habitica.get_user_profile`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "habitica" --action "get_user_profile"
```

## Run

```bash
oo connector run "habitica" --action "get_user_profile" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
