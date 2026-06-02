# Breeze · `list_profile_fields`

List Breeze profile sections and fields used to construct Breeze people filters.

- **Service**: `breeze`
- **Action**: `list_profile_fields`
- **Action id**: `breeze.list_profile_fields`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "breeze" --action "list_profile_fields"
```

## Run

```bash
oo connector run "breeze" --action "list_profile_fields" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
