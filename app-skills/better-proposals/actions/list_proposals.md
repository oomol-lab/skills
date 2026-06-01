# Better Proposals · `list_proposals`

List Better Proposals proposals with optional pagination and document type filtering.

- **Service**: `better_proposals`
- **Action**: `list_proposals`
- **Action id**: `better_proposals.list_proposals`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "better_proposals" --action "list_proposals"
```

## Run

```bash
oo connector run "better_proposals" --action "list_proposals" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
