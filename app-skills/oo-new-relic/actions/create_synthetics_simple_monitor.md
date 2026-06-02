# New Relic · `create_synthetics_simple_monitor`

Create a New Relic ping monitor by using the syntheticsCreateSimpleMonitor mutation.

- **Service**: `new_relic`
- **Action**: `create_synthetics_simple_monitor`
- **Action id**: `new_relic.create_synthetics_simple_monitor`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "new_relic" --action "create_synthetics_simple_monitor"
```

## Run

```bash
oo connector run "new_relic" --action "create_synthetics_simple_monitor" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes New Relic state. Confirm the exact payload and intended effect with the user before running.
