# Better Proposals · `list_companies`

List Better Proposals companies with optional pagination.

- **Service**: `better_proposals`
- **Action**: `list_companies`
- **Action id**: `better_proposals.list_companies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "better_proposals" --action "list_companies"
```

## Run

```bash
oo connector run "better_proposals" --action "list_companies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
