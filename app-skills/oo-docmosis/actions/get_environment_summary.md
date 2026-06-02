# Docmosis · `get_environment_summary`

Get Docmosis environment plan, quota, and readiness information for the selected processing location.

- **Service**: `docmosis`
- **Action**: `get_environment_summary`
- **Action id**: `docmosis.get_environment_summary`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docmosis" --action "get_environment_summary"
```

## Run

```bash
oo connector run "docmosis" --action "get_environment_summary" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
