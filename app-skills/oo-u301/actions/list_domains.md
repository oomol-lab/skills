# U301 · `list_domains`

List the U301 short-link domains available in the connected workspace.

- **Service**: `u301`
- **Action**: `list_domains`
- **Action id**: `u301.list_domains`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "u301" --action "list_domains"
```

## Run

```bash
oo connector run "u301" --action "list_domains" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
