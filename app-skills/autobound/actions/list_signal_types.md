# Autobound · `list_signal_types`

List Autobound signal types and optionally include live counts and refresh cadence metadata.

- **Service**: `autobound`
- **Action**: `list_signal_types`
- **Action id**: `autobound.list_signal_types`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "autobound" --action "list_signal_types"
```

## Run

```bash
oo connector run "autobound" --action "list_signal_types" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
