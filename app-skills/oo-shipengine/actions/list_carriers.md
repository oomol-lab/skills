# ShipEngine · `list_carriers`

List carrier accounts connected to the ShipEngine account.

- **Service**: `shipengine`
- **Action**: `list_carriers`
- **Action id**: `shipengine.list_carriers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shipengine" --action "list_carriers"
```

## Run

```bash
oo connector run "shipengine" --action "list_carriers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
