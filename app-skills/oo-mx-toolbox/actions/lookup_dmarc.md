# MxToolbox · `lookup_dmarc`

Look up the DMARC record for a domain and return the official MxToolbox response payload.

- **Service**: `mx_toolbox`
- **Action**: `lookup_dmarc`
- **Action id**: `mx_toolbox.lookup_dmarc`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mx_toolbox" --action "lookup_dmarc"
```

## Run

```bash
oo connector run "mx_toolbox" --action "lookup_dmarc" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
