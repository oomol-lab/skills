# Mailtrap · `get_billing_usage`

Get current Mailtrap billing cycle usage.

- **Service**: `mailtrap`
- **Action**: `get_billing_usage`
- **Action id**: `mailtrap.get_billing_usage`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "get_billing_usage"
```

## Run

```bash
oo connector run "mailtrap" --action "get_billing_usage" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
