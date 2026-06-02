# Enigma · `get_aggregate_counts`

Run the official Enigma GraphQL `aggregate` query to count matching entities or related entities for a search request.

- **Service**: `enigma`
- **Action**: `get_aggregate_counts`
- **Action id**: `enigma.get_aggregate_counts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "enigma" --action "get_aggregate_counts"
```

## Run

```bash
oo connector run "enigma" --action "get_aggregate_counts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
