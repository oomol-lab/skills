# Beaconcha.in · `list_validators`

List the current validator snapshots for one or more validator identifiers.

- **Service**: `beaconchain`
- **Action**: `list_validators`
- **Action id**: `beaconchain.list_validators`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "beaconchain" --action "list_validators"
```

## Run

```bash
oo connector run "beaconchain" --action "list_validators" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
