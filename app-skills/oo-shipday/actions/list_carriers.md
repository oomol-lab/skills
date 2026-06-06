# Shipday · `list_carriers`

Retrieve carriers configured in Shipday.

- **Service**: `shipday`
- **Action**: `list_carriers`
- **Action id**: `shipday.list_carriers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shipday" --action "list_carriers"
```

## Run

```bash
oo connector run "shipday" --action "list_carriers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
