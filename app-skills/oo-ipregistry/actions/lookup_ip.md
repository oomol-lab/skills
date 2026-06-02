# Ipregistry · `lookup_ip`

Look up geolocation, connection, company, currency, time zone, and security data for one IP address.

- **Service**: `ipregistry`
- **Action**: `lookup_ip`
- **Action id**: `ipregistry.lookup_ip`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipregistry" --action "lookup_ip"
```

## Run

```bash
oo connector run "ipregistry" --action "lookup_ip" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
