# Beaconcha.in · `get_validator_consensus_rewards`

Get per-validator reward breakdowns for a finalized Beaconcha.in epoch.

- **Service**: `beaconchain`
- **Action**: `get_validator_consensus_rewards`
- **Action id**: `beaconchain.get_validator_consensus_rewards`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "beaconchain" --action "get_validator_consensus_rewards"
```

## Run

```bash
oo connector run "beaconchain" --action "get_validator_consensus_rewards" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
