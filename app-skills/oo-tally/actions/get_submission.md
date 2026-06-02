# Tally · `get_submission`

Fetch a single Tally form submission by ID with its responses and questions.

- **Service**: `tally`
- **Action**: `get_submission`
- **Action id**: `tally.get_submission`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tally" --action "get_submission"
```

## Run

```bash
oo connector run "tally" --action "get_submission" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
