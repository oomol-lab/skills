# Jotform · `get_submission`

Get one Jotform submission by submission ID.

- **Service**: `jotform`
- **Action**: `get_submission`
- **Action id**: `jotform.get_submission`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "jotform" --action "get_submission"
```

## Run

```bash
oo connector run "jotform" --action "get_submission" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
