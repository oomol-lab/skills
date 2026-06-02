# New Relic · `list_monitors`

List synthetic monitors by using NerdGraph entity search over the SYNTH MONITOR entity type.

- **Service**: `new_relic`
- **Action**: `list_monitors`
- **Action id**: `new_relic.list_monitors`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "new_relic" --action "list_monitors"
```

## Run

```bash
oo connector run "new_relic" --action "list_monitors" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
