# Workable · `list_candidates`

List candidates from a Workable account with optional job, stage, and timestamp filters.

- **Service**: `workable`
- **Action**: `list_candidates`
- **Action id**: `workable.list_candidates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "workable" --action "list_candidates"
```

## Run

```bash
oo connector run "workable" --action "list_candidates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
