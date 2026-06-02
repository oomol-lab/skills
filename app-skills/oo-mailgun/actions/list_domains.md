# Mailgun · `list_domains`

List Mailgun domains available to the current API key.

- **Service**: `mailgun`
- **Action**: `list_domains`
- **Action id**: `mailgun.list_domains`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailgun" --action "list_domains"
```

## Run

```bash
oo connector run "mailgun" --action "list_domains" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
