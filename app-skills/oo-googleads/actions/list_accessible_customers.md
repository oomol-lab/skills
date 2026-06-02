# Google Ads · `list_accessible_customers`

List Google Ads customer resource names accessible to the current OAuth credential.

- **Service**: `googleads`
- **Action**: `list_accessible_customers`
- **Action id**: `googleads.list_accessible_customers`
- **Required scopes**: googleads.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googleads" --action "list_accessible_customers"
```

## Run

```bash
oo connector run "googleads" --action "list_accessible_customers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
