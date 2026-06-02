# Benzinga · `get_consensus_ratings`

Get Benzinga consensus analyst ratings and price target data for a ticker.

- **Service**: `benzinga`
- **Action**: `get_consensus_ratings`
- **Action id**: `benzinga.get_consensus_ratings`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "benzinga" --action "get_consensus_ratings"
```

## Run

```bash
oo connector run "benzinga" --action "get_consensus_ratings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
