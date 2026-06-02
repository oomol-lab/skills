# MxToolbox · `lookup_mx`

Look up MX records for a domain and return the official MxToolbox response payload.

- **Service**: `mx_toolbox`
- **Action**: `lookup_mx`
- **Action id**: `mx_toolbox.lookup_mx`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mx_toolbox" --action "lookup_mx"
```

## Run

```bash
oo connector run "mx_toolbox" --action "lookup_mx" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
