# Leiga · `get_issue_by_number`

Fetch one Leiga issue by its official issueNo identifier.

- **Service**: `leiga`
- **Action**: `get_issue_by_number`
- **Action id**: `leiga.get_issue_by_number`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "leiga" --action "get_issue_by_number"
```

## Run

```bash
oo connector run "leiga" --action "get_issue_by_number" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
