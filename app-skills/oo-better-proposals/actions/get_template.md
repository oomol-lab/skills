# Better Proposals · `get_template`

Get details for a single Better Proposals template by ID.

- **Service**: `better_proposals`
- **Action**: `get_template`
- **Action id**: `better_proposals.get_template`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "better_proposals" --action "get_template"
```

## Run

```bash
oo connector run "better_proposals" --action "get_template" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
