# Fillout · `get_submission`

Get one Fillout form submission by submission ID.

- **Service**: `fillout`
- **Action**: `get_submission`
- **Action id**: `fillout.get_submission`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fillout" --action "get_submission"
```

## Run

```bash
oo connector run "fillout" --action "get_submission" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
