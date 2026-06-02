# Hunter · `email_finder`

Find the most likely professional email address for a person in Hunter.

- **Service**: `hunter`
- **Action**: `email_finder`
- **Action id**: `hunter.email_finder`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hunter" --action "email_finder"
```

## Run

```bash
oo connector run "hunter" --action "email_finder" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
