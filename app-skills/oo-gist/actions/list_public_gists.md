# Gist · `list_public_gists`

List recent public GitHub gists.

- **Service**: `gist`
- **Action**: `list_public_gists`
- **Action id**: `gist.list_public_gists`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gist" --action "list_public_gists"
```

## Run

```bash
oo connector run "gist" --action "list_public_gists" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
