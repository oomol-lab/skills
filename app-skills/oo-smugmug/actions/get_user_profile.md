# SmugMug · `get_user_profile`

Retrieve the public profile for a SmugMug user.

- **Service**: `smugmug`
- **Action**: `get_user_profile`
- **Action id**: `smugmug.get_user_profile`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "smugmug" --action "get_user_profile"
```

## Run

```bash
oo connector run "smugmug" --action "get_user_profile" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
