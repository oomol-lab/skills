# Loops · `list_mailing_lists`

List Loops mailing lists available to the current API key.

- **Service**: `loops`
- **Action**: `list_mailing_lists`
- **Action id**: `loops.list_mailing_lists`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "loops" --action "list_mailing_lists"
```

## Run

```bash
oo connector run "loops" --action "list_mailing_lists" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
