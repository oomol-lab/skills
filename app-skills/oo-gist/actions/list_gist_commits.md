# Gist · `list_gist_commits`

List commit history for a GitHub gist.

- **Service**: `gist`
- **Action**: `list_gist_commits`
- **Action id**: `gist.list_gist_commits`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gist" --action "list_gist_commits"
```

## Run

```bash
oo connector run "gist" --action "list_gist_commits" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
