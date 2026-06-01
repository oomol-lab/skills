# MxToolbox · `lookup_dns`

Perform a comprehensive DNS lookup for a domain and return the official MxToolbox response payload.

- **Service**: `mx_toolbox`
- **Action**: `lookup_dns`
- **Action id**: `mx_toolbox.lookup_dns`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mx_toolbox" --action "lookup_dns"
```

## Run

```bash
oo connector run "mx_toolbox" --action "lookup_dns" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
