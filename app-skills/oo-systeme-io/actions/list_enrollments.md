# Systeme.io · `list_enrollments`

List enrollments for a specific course in Systeme.io.

- **Service**: `systeme_io`
- **Action**: `list_enrollments`
- **Action id**: `systeme_io.list_enrollments`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "systeme_io" --action "list_enrollments"
```

## Run

```bash
oo connector run "systeme_io" --action "list_enrollments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
