# Google Ads · `create_customer_list`

Create a new Google Ads CRM-based customer list for Customer Match uploads.

- **Service**: `googleads`
- **Action**: `create_customer_list`
- **Action id**: `googleads.create_customer_list`
- **Required scopes**: googleads.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googleads" --action "create_customer_list"
```

## Run

```bash
oo connector run "googleads" --action "create_customer_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Ads state. Confirm the exact payload and intended effect with the user before running.
