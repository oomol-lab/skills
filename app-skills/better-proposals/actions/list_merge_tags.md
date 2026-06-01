# Better Proposals · `list_merge_tags`

List Better Proposals custom merge tags with optional pagination.

- **Service**: `better_proposals`
- **Action**: `list_merge_tags`
- **Action id**: `better_proposals.list_merge_tags`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "better_proposals" --action "list_merge_tags"
```

## Run

```bash
oo connector run "better_proposals" --action "list_merge_tags" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Better Proposals state. Confirm the exact payload and intended effect with the user before running.
