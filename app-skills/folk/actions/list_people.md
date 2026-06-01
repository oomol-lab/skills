# folk · `list_people`

List Folk people with official cursor pagination and the documented nested filter syntax.

- **Service**: `folk`
- **Action**: `list_people`
- **Action id**: `folk.list_people`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "folk" --action "list_people"
```

## Run

```bash
oo connector run "folk" --action "list_people" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
