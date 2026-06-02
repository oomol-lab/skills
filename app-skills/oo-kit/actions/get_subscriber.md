# Kit · `get_subscriber`

Get one Kit subscriber by ID.

- **Service**: `kit`
- **Action**: `get_subscriber`
- **Action id**: `kit.get_subscriber`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "kit" --action "get_subscriber"
```

## Run

```bash
oo connector run "kit" --action "get_subscriber" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
