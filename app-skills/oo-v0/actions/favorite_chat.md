# v0 · `favorite_chat`

Mark or unmark a v0 chat as favorite.

- **Service**: `v0`
- **Action**: `favorite_chat`
- **Action id**: `v0.favorite_chat`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "favorite_chat"
```

## Run

```bash
oo connector run "v0" --action "favorite_chat" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
