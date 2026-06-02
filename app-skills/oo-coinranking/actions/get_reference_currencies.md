# Coinranking · `get_reference_currencies`

List reference currencies supported by Coinranking.

- **Service**: `coinranking`
- **Action**: `get_reference_currencies`
- **Action id**: `coinranking.get_reference_currencies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "coinranking" --action "get_reference_currencies"
```

## Run

```bash
oo connector run "coinranking" --action "get_reference_currencies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
