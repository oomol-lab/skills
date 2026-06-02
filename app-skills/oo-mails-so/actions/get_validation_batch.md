# Mails · `get_validation_batch`

Fetch one Mails batch validation job together with its email results.

- **Service**: `mails_so`
- **Action**: `get_validation_batch`
- **Action id**: `mails_so.get_validation_batch`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mails_so" --action "get_validation_batch"
```

## Run

```bash
oo connector run "mails_so" --action "get_validation_batch" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
