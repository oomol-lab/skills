# BuiltWith · `lookup_domain_summary`

Retrieve the BuiltWith Free API technology group summary for a root domain.

- **Service**: `builtwith`
- **Action**: `lookup_domain_summary`
- **Action id**: `builtwith.lookup_domain_summary`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "builtwith" --action "lookup_domain_summary"
```

## Run

```bash
oo connector run "builtwith" --action "lookup_domain_summary" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
