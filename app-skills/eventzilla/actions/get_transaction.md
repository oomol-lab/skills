# Eventzilla · `get_transaction`

Get one Eventzilla transaction by checkout ID or order reference number.

- **Service**: `eventzilla`
- **Action**: `get_transaction`
- **Action id**: `eventzilla.get_transaction`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "eventzilla" --action "get_transaction"
```

## Run

```bash
oo connector run "eventzilla" --action "get_transaction" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
