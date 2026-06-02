# Gigasheet · `get_space_used`

Get the current storage usage reported for the authenticated Gigasheet user.

- **Service**: `gigasheet`
- **Action**: `get_space_used`
- **Action id**: `gigasheet.get_space_used`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gigasheet" --action "get_space_used"
```

## Run

```bash
oo connector run "gigasheet" --action "get_space_used" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
