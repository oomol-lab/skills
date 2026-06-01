# Postman · `list_account_invoices`

Tool to get all invoices for a Postman billing account filtered by status. Use when you need to retrieve invoice history for an account. The account ID must first be obtained from the GET /accounts endpoint.

- **Service**: `postman`
- **Action**: `list_account_invoices`
- **Action id**: `postman.list_account_invoices`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "list_account_invoices"
```

## Run

```bash
oo connector run "postman" --action "list_account_invoices" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
