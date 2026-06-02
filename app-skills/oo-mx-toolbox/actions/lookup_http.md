# MxToolbox · `lookup_http`

Run an HTTP lookup for a domain and return the official MxToolbox response payload.

- **Service**: `mx_toolbox`
- **Action**: `lookup_http`
- **Action id**: `mx_toolbox.lookup_http`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mx_toolbox" --action "lookup_http"
```

## Run

```bash
oo connector run "mx_toolbox" --action "lookup_http" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
