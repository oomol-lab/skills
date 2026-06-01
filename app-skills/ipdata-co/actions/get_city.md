# ipdata.co · `get_city`

Look up the city field for a specific IP address or the caller's current IP address.

- **Service**: `ipdata_co`
- **Action**: `get_city`
- **Action id**: `ipdata_co.get_city`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipdata_co" --action "get_city"
```

## Run

```bash
oo connector run "ipdata_co" --action "get_city" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
