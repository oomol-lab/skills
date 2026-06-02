# ipdata.co · `get_currency_by_ip`

Look up currency data for a specific IP address or the caller's current IP address.

- **Service**: `ipdata_co`
- **Action**: `get_currency_by_ip`
- **Action id**: `ipdata_co.get_currency_by_ip`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipdata_co" --action "get_currency_by_ip"
```

## Run

```bash
oo connector run "ipdata_co" --action "get_currency_by_ip" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
