# GTmetrix · `list_browsers`

List GTmetrix browsers that can be used for tests.

- **Service**: `gtmetrix`
- **Action**: `list_browsers`
- **Action id**: `gtmetrix.list_browsers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gtmetrix" --action "list_browsers"
```

## Run

```bash
oo connector run "gtmetrix" --action "list_browsers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
