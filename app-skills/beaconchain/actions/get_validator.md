# Beaconcha.in · `get_validator`

Get the current validator snapshot for a single validator identifier.

- **Service**: `beaconchain`
- **Action**: `get_validator`
- **Action id**: `beaconchain.get_validator`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "beaconchain" --action "get_validator"
```

## Run

```bash
oo connector run "beaconchain" --action "get_validator" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
