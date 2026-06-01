# updown.io · `list_checks`

List all monitoring checks available in the updown.io account.

- **Service**: `updown_io`
- **Action**: `list_checks`
- **Action id**: `updown_io.list_checks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "updown_io" --action "list_checks"
```

## Run

```bash
oo connector run "updown_io" --action "list_checks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
