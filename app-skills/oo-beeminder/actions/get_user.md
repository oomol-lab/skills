# Beeminder · `get_user`

Get Beeminder user information, including goals and optional diff-based goal details.

- **Service**: `beeminder`
- **Action**: `get_user`
- **Action id**: `beeminder.get_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "beeminder" --action "get_user"
```

## Run

```bash
oo connector run "beeminder" --action "get_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
