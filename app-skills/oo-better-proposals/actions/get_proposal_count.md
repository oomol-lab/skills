# Better Proposals · `get_proposal_count`

Get the total Better Proposals proposal count for the connected account.

- **Service**: `better_proposals`
- **Action**: `get_proposal_count`
- **Action id**: `better_proposals.get_proposal_count`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "better_proposals" --action "get_proposal_count"
```

## Run

```bash
oo connector run "better_proposals" --action "get_proposal_count" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
