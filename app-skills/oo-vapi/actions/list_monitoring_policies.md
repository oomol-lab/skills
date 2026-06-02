# Vapi · `list_monitoring_policies`

List Vapi monitoring policies with optional severity, monitor, and timestamp filters.

- **Service**: `vapi`
- **Action**: `list_monitoring_policies`
- **Action id**: `vapi.list_monitoring_policies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "list_monitoring_policies"
```

## Run

```bash
oo connector run "vapi" --action "list_monitoring_policies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
