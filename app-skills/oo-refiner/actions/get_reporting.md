# Refiner · `get_reporting`

Retrieve Refiner reporting metrics for forms, segments, and questions.

- **Service**: `refiner`
- **Action**: `get_reporting`
- **Action id**: `refiner.get_reporting`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "refiner" --action "get_reporting"
```

## Run

```bash
oo connector run "refiner" --action "get_reporting" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
