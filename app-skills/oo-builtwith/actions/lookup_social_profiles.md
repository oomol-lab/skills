# BuiltWith · `lookup_social_profiles`

Map one or more social profile URLs to BuiltWith root domain matches.

- **Service**: `builtwith`
- **Action**: `lookup_social_profiles`
- **Action id**: `builtwith.lookup_social_profiles`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "builtwith" --action "lookup_social_profiles"
```

## Run

```bash
oo connector run "builtwith" --action "lookup_social_profiles" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
