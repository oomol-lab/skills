# folk · `list_companies`

List Folk companies with official cursor pagination and the documented nested filter syntax.

- **Service**: `folk`
- **Action**: `list_companies`
- **Action id**: `folk.list_companies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "folk" --action "list_companies"
```

## Run

```bash
oo connector run "folk" --action "list_companies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
