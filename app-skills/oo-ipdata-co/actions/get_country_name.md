# ipdata.co · `get_country_name`

Look up the country_name field for a specific IP address or the caller's current IP address.

- **Service**: `ipdata_co`
- **Action**: `get_country_name`
- **Action id**: `ipdata_co.get_country_name`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipdata_co" --action "get_country_name"
```

## Run

```bash
oo connector run "ipdata_co" --action "get_country_name" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
