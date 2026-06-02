# Dida365 · `get_habit`

Get a Dida365 habit by its habit ID.

- **Service**: `dida365`
- **Action**: `get_habit`
- **Action id**: `dida365.get_habit`
- **Required scopes**: dida365.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dida365" --action "get_habit"
```

## Run

```bash
oo connector run "dida365" --action "get_habit" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
