# Marketstack · `list_currencies`

List currencies available through Marketstack.

- **Service**: `marketstack`
- **Action**: `list_currencies`
- **Action id**: `marketstack.list_currencies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "marketstack" --action "list_currencies"
```

## Run

```bash
oo connector run "marketstack" --action "list_currencies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
