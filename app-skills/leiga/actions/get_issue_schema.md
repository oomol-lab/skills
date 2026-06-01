# Leiga · `get_issue_schema`

Fetch the Leiga issue field schema for one project.

- **Service**: `leiga`
- **Action**: `get_issue_schema`
- **Action id**: `leiga.get_issue_schema`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "leiga" --action "get_issue_schema"
```

## Run

```bash
oo connector run "leiga" --action "get_issue_schema" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
