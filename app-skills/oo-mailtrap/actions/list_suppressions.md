# Mailtrap · `list_suppressions`

List Mailtrap suppressions.

- **Service**: `mailtrap`
- **Action**: `list_suppressions`
- **Action id**: `mailtrap.list_suppressions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "list_suppressions"
```

## Run

```bash
oo connector run "mailtrap" --action "list_suppressions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
