# BuiltWith · `lookup_domain_profile`

Retrieve a BuiltWith technology profile for a domain while excluding personally identifiable information by default.

- **Service**: `builtwith`
- **Action**: `lookup_domain_profile`
- **Action id**: `builtwith.lookup_domain_profile`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "builtwith" --action "lookup_domain_profile"
```

## Run

```bash
oo connector run "builtwith" --action "lookup_domain_profile" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
