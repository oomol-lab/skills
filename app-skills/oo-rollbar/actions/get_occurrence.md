# Rollbar · `get_occurrence`

Get one Rollbar occurrence by occurrence ID.

- **Service**: `rollbar`
- **Action**: `get_occurrence`
- **Action id**: `rollbar.get_occurrence`
- **Required scopes**: rollbar.project.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rollbar" --action "get_occurrence"
```

## Run

```bash
oo connector run "rollbar" --action "get_occurrence" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
