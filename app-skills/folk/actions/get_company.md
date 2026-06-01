# folk · `get_company`

Get one Folk company by company ID.

- **Service**: `folk`
- **Action**: `get_company`
- **Action id**: `folk.get_company`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "folk" --action "get_company"
```

## Run

```bash
oo connector run "folk" --action "get_company" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
