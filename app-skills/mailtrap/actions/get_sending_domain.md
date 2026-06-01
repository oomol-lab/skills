# Mailtrap · `get_sending_domain`

Get one Mailtrap sending domain by ID.

- **Service**: `mailtrap`
- **Action**: `get_sending_domain`
- **Action id**: `mailtrap.get_sending_domain`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "get_sending_domain"
```

## Run

```bash
oo connector run "mailtrap" --action "get_sending_domain" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
