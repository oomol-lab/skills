# WhoisFreaks · `list_subdomains`

List known subdomains for one domain with optional paging and status filters.

- **Service**: `whoisfreaks`
- **Action**: `list_subdomains`
- **Action id**: `whoisfreaks.list_subdomains`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "whoisfreaks" --action "list_subdomains"
```

## Run

```bash
oo connector run "whoisfreaks" --action "list_subdomains" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
