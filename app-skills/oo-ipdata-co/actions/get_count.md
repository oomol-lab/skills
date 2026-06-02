# ipdata.co · `get_count`

Look up the count field for a specific IP address or the caller's current IP address.

- **Service**: `ipdata_co`
- **Action**: `get_count`
- **Action id**: `ipdata_co.get_count`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipdata_co" --action "get_count"
```

## Run

```bash
oo connector run "ipdata_co" --action "get_count" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
