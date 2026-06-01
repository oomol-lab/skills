# MxToolbox · `monitor_status`

Retrieve the current status of all monitors in the authenticated MxToolbox account.

- **Service**: `mx_toolbox`
- **Action**: `monitor_status`
- **Action id**: `mx_toolbox.monitor_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mx_toolbox" --action "monitor_status"
```

## Run

```bash
oo connector run "mx_toolbox" --action "monitor_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
