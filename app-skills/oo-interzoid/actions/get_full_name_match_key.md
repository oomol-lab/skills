# Interzoid · `get_full_name_match_key`

Generate an Interzoid similarity key for a person's full name.

- **Service**: `interzoid`
- **Action**: `get_full_name_match_key`
- **Action id**: `interzoid.get_full_name_match_key`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "interzoid" --action "get_full_name_match_key"
```

## Run

```bash
oo connector run "interzoid" --action "get_full_name_match_key" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
