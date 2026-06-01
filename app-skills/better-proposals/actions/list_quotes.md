# Better Proposals · `list_quotes`

List Better Proposals quotes with optional pagination.

- **Service**: `better_proposals`
- **Action**: `list_quotes`
- **Action id**: `better_proposals.list_quotes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "better_proposals" --action "list_quotes"
```

## Run

```bash
oo connector run "better_proposals" --action "list_quotes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
