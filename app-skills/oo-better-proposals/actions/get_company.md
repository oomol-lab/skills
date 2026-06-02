# Better Proposals · `get_company`

Get details for a single Better Proposals company by ID.

- **Service**: `better_proposals`
- **Action**: `get_company`
- **Action id**: `better_proposals.get_company`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "better_proposals" --action "get_company"
```

## Run

```bash
oo connector run "better_proposals" --action "get_company" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
