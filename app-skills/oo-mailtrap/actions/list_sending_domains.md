# Mailtrap · `list_sending_domains`

List Mailtrap sending domains.

- **Service**: `mailtrap`
- **Action**: `list_sending_domains`
- **Action id**: `mailtrap.list_sending_domains`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "list_sending_domains"
```

## Run

```bash
oo connector run "mailtrap" --action "list_sending_domains" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
