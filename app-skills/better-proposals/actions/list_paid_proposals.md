# Better Proposals · `list_paid_proposals`

List Better Proposals proposals that have been paid.

- **Service**: `better_proposals`
- **Action**: `list_paid_proposals`
- **Action id**: `better_proposals.list_paid_proposals`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "better_proposals" --action "list_paid_proposals"
```

## Run

```bash
oo connector run "better_proposals" --action "list_paid_proposals" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
