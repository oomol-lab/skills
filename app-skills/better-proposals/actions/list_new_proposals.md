# Better Proposals · `list_new_proposals`

List Better Proposals proposals that are currently in the new proposal lifecycle state.

- **Service**: `better_proposals`
- **Action**: `list_new_proposals`
- **Action id**: `better_proposals.list_new_proposals`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "better_proposals" --action "list_new_proposals"
```

## Run

```bash
oo connector run "better_proposals" --action "list_new_proposals" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
