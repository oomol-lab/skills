# Mailgun · `list_suppressions`

List records from a Mailgun suppression or allowlist table.

- **Service**: `mailgun`
- **Action**: `list_suppressions`
- **Action id**: `mailgun.list_suppressions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailgun" --action "list_suppressions"
```

## Run

```bash
oo connector run "mailgun" --action "list_suppressions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
