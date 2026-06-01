# Delighted · `list_people`

List people in the connected Delighted account.

- **Service**: `delighted`
- **Action**: `list_people`
- **Action id**: `delighted.list_people`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "delighted" --action "list_people"
```

## Run

```bash
oo connector run "delighted" --action "list_people" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
