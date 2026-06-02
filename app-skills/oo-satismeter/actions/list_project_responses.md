# SatisMeter · `list_project_responses`

List responses recorded across all surveys in a SatisMeter project.

- **Service**: `satismeter`
- **Action**: `list_project_responses`
- **Action id**: `satismeter.list_project_responses`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "satismeter" --action "list_project_responses"
```

## Run

```bash
oo connector run "satismeter" --action "list_project_responses" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
