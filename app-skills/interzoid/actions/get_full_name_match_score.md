# Interzoid · `get_full_name_match_score`

Score how closely two full names match according to Interzoid.

- **Service**: `interzoid`
- **Action**: `get_full_name_match_score`
- **Action id**: `interzoid.get_full_name_match_score`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "interzoid" --action "get_full_name_match_score"
```

## Run

```bash
oo connector run "interzoid" --action "get_full_name_match_score" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
