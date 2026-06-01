# BuiltWith · `get_domain_recommendations`

Retrieve BuiltWith technology recommendations for one or more root domains.

- **Service**: `builtwith`
- **Action**: `get_domain_recommendations`
- **Action id**: `builtwith.get_domain_recommendations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "builtwith" --action "get_domain_recommendations"
```

## Run

```bash
oo connector run "builtwith" --action "get_domain_recommendations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
