# MxToolbox · `lookup_blacklist`

Check whether a domain or IP is listed on blacklists and return the official MxToolbox response payload.

- **Service**: `mx_toolbox`
- **Action**: `lookup_blacklist`
- **Action id**: `mx_toolbox.lookup_blacklist`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mx_toolbox" --action "lookup_blacklist"
```

## Run

```bash
oo connector run "mx_toolbox" --action "lookup_blacklist" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
