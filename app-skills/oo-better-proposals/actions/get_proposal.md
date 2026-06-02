# Better Proposals · `get_proposal`

Get details for a single Better Proposals proposal by ID.

- **Service**: `better_proposals`
- **Action**: `get_proposal`
- **Action id**: `better_proposals.get_proposal`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "better_proposals" --action "get_proposal"
```

## Run

```bash
oo connector run "better_proposals" --action "get_proposal" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
