# Marketstack · `list_exchanges`

List stock exchanges available through Marketstack.

- **Service**: `marketstack`
- **Action**: `list_exchanges`
- **Action id**: `marketstack.list_exchanges`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "marketstack" --action "list_exchanges"
```

## Run

```bash
oo connector run "marketstack" --action "list_exchanges" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
