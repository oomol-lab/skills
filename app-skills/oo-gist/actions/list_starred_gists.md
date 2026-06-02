# Gist · `list_starred_gists`

List gists starred by the authenticated GitHub user.

- **Service**: `gist`
- **Action**: `list_starred_gists`
- **Action id**: `gist.list_starred_gists`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gist" --action "list_starred_gists"
```

## Run

```bash
oo connector run "gist" --action "list_starred_gists" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
