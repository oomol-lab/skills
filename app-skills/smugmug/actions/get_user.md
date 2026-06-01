# SmugMug · `get_user`

Retrieve a SmugMug user by nickname.

- **Service**: `smugmug`
- **Action**: `get_user`
- **Action id**: `smugmug.get_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "smugmug" --action "get_user"
```

## Run

```bash
oo connector run "smugmug" --action "get_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
