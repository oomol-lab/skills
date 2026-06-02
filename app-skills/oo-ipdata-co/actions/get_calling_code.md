# ipdata.co · `get_calling_code`

Look up the calling_code field for a specific IP address or the caller's current IP address.

- **Service**: `ipdata_co`
- **Action**: `get_calling_code`
- **Action id**: `ipdata_co.get_calling_code`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipdata_co" --action "get_calling_code"
```

## Run

```bash
oo connector run "ipdata_co" --action "get_calling_code" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
