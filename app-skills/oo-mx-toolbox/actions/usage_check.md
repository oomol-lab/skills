# MxToolbox · `usage_check`

Retrieve API usage statistics for DNS and network lookups from MxToolbox.

- **Service**: `mx_toolbox`
- **Action**: `usage_check`
- **Action id**: `mx_toolbox.usage_check`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mx_toolbox" --action "usage_check"
```

## Run

```bash
oo connector run "mx_toolbox" --action "usage_check" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
