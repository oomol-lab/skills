# GIPHY · `get_random_id`

Create a GIPHY random_id value for personalization across requests.

- **Service**: `giphy`
- **Action**: `get_random_id`
- **Action id**: `giphy.get_random_id`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "giphy" --action "get_random_id"
```

## Run

```bash
oo connector run "giphy" --action "get_random_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
