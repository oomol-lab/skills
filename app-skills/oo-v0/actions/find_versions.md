# v0 · `find_versions`

List generated versions for a v0 chat.

- **Service**: `v0`
- **Action**: `find_versions`
- **Action id**: `v0.find_versions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "find_versions"
```

## Run

```bash
oo connector run "v0" --action "find_versions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
