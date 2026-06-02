# CircleCI · `get_pipeline`

Get a CircleCI pipeline by pipeline ID.

- **Service**: `circleci`
- **Action**: `get_pipeline`
- **Action id**: `circleci.get_pipeline`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "circleci" --action "get_pipeline"
```

## Run

```bash
oo connector run "circleci" --action "get_pipeline" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
