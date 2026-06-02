# Better Proposals · `get_quote`

Get details for a single Better Proposals quote by ID.

- **Service**: `better_proposals`
- **Action**: `get_quote`
- **Action id**: `better_proposals.get_quote`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "better_proposals" --action "get_quote"
```

## Run

```bash
oo connector run "better_proposals" --action "get_quote" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
