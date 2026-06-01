# Cincopa · `list_galleries`

List galleries from a Cincopa account with optional search and tag filters.

- **Service**: `cincopa`
- **Action**: `list_galleries`
- **Action id**: `cincopa.list_galleries`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cincopa" --action "list_galleries"
```

## Run

```bash
oo connector run "cincopa" --action "list_galleries" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
