# Refiner · `list_responses`

List survey responses collected in Refiner.

- **Service**: `refiner`
- **Action**: `list_responses`
- **Action id**: `refiner.list_responses`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "refiner" --action "list_responses"
```

## Run

```bash
oo connector run "refiner" --action "list_responses" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
