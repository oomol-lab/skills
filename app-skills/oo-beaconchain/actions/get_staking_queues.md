# Beaconcha.in · `get_staking_queues`

Get the current staking queue metrics for the requested Beaconcha.in chain.

- **Service**: `beaconchain`
- **Action**: `get_staking_queues`
- **Action id**: `beaconchain.get_staking_queues`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "beaconchain" --action "get_staking_queues"
```

## Run

```bash
oo connector run "beaconchain" --action "get_staking_queues" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
