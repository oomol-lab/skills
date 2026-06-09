# ShipEngine · `validate_addresses`

Validate one or more mailing addresses with ShipEngine and return deliverability details.

- **Service**: `shipengine`
- **Action**: `validate_addresses`
- **Action id**: `shipengine.validate_addresses`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shipengine" --action "validate_addresses"
```

## Run

```bash
oo connector run "shipengine" --action "validate_addresses" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
