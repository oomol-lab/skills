# Brevo · `get_account`

Retrieve the current Brevo account profile and plan information.

- **Service**: `brevo`
- **Action**: `get_account`
- **Action id**: `brevo.get_account`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "brevo" --action "get_account"
```

## Run

```bash
oo connector run "brevo" --action "get_account" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
