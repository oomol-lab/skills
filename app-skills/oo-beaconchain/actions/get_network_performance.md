# Beaconcha.in · `get_network_performance`

Get aggregated Beaconcha.in network performance metrics for a fixed evaluation window.

- **Service**: `beaconchain`
- **Action**: `get_network_performance`
- **Action id**: `beaconchain.get_network_performance`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "beaconchain" --action "get_network_performance"
```

## Run

```bash
oo connector run "beaconchain" --action "get_network_performance" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
