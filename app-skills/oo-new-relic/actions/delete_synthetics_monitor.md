# New Relic · `delete_synthetics_monitor`

Delete a synthetic monitor by GUID using the syntheticsDeleteMonitor mutation.

- **Service**: `new_relic`
- **Action**: `delete_synthetics_monitor`
- **Action id**: `new_relic.delete_synthetics_monitor`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "new_relic" --action "delete_synthetics_monitor"
```

## Run

```bash
oo connector run "new_relic" --action "delete_synthetics_monitor" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites New Relic data. Always confirm the target and get explicit user approval before running.
