# updown.io · `get_check`

Get a single monitoring check from updown.io by token.

- **Service**: `updown_io`
- **Action**: `get_check`
- **Action id**: `updown_io.get_check`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "updown_io" --action "get_check"
```

## Run

```bash
oo connector run "updown_io" --action "get_check" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
