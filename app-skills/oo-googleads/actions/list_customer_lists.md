# Google Ads · `list_customer_lists`

List Google Ads customer lists available under the specified customer account.

- **Service**: `googleads`
- **Action**: `list_customer_lists`
- **Action id**: `googleads.list_customer_lists`
- **Required scopes**: googleads.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googleads" --action "list_customer_lists"
```

## Run

```bash
oo connector run "googleads" --action "list_customer_lists" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
