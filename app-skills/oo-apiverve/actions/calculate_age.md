# APIVerve · `calculate_age`

Calculate age details from a date of birth using APIVerve Age Calculator.

- **Service**: `apiverve`
- **Action**: `calculate_age`
- **Action id**: `apiverve.calculate_age`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apiverve" --action "calculate_age"
```

## Run

```bash
oo connector run "apiverve" --action "calculate_age" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
