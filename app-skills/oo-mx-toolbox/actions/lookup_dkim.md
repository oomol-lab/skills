# MxToolbox · `lookup_dkim`

Look up one DKIM record and return the official MxToolbox response payload.

- **Service**: `mx_toolbox`
- **Action**: `lookup_dkim`
- **Action id**: `mx_toolbox.lookup_dkim`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mx_toolbox" --action "lookup_dkim"
```

## Run

```bash
oo connector run "mx_toolbox" --action "lookup_dkim" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
