# Eventzilla · `list_event_transactions`

List Eventzilla transactions for one event.

- **Service**: `eventzilla`
- **Action**: `list_event_transactions`
- **Action id**: `eventzilla.list_event_transactions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "eventzilla" --action "list_event_transactions"
```

## Run

```bash
oo connector run "eventzilla" --action "list_event_transactions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
