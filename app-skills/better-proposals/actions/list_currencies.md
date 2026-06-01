# Better Proposals · `list_currencies`

List Better Proposals currencies with optional pagination.

- **Service**: `better_proposals`
- **Action**: `list_currencies`
- **Action id**: `better_proposals.list_currencies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "better_proposals" --action "list_currencies"
```

## Run

```bash
oo connector run "better_proposals" --action "list_currencies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
