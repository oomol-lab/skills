# Gist · `check_gist_starred`

Check whether the authenticated GitHub user has starred a gist.

- **Service**: `gist`
- **Action**: `check_gist_starred`
- **Action id**: `gist.check_gist_starred`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gist" --action "check_gist_starred"
```

## Run

```bash
oo connector run "gist" --action "check_gist_starred" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
