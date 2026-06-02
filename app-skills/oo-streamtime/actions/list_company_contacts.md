# Streamtime · `list_company_contacts`

List the contacts that belong to a Streamtime company.

- **Service**: `streamtime`
- **Action**: `list_company_contacts`
- **Action id**: `streamtime.list_company_contacts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "streamtime" --action "list_company_contacts"
```

## Run

```bash
oo connector run "streamtime" --action "list_company_contacts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
