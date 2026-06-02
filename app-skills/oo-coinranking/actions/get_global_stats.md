# Coinranking · `get_global_stats`

Get global cryptocurrency market statistics from Coinranking.

- **Service**: `coinranking`
- **Action**: `get_global_stats`
- **Action id**: `coinranking.get_global_stats`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "coinranking" --action "get_global_stats"
```

## Run

```bash
oo connector run "coinranking" --action "get_global_stats" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
