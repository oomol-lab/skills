# New Relic · `get_synth_monitor`

Get a synthetic monitor by its legacy monitor ID or entity GUID using NerdGraph entity search.

- **Service**: `new_relic`
- **Action**: `get_synth_monitor`
- **Action id**: `new_relic.get_synth_monitor`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "new_relic" --action "get_synth_monitor"
```

## Run

```bash
oo connector run "new_relic" --action "get_synth_monitor" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
