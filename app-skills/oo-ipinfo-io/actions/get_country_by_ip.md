# IPinfo · `get_country_by_ip`

Retrieve the ISO 3166-1 alpha-2 country code for a specific IP address.

- **Service**: `ipinfo_io`
- **Action**: `get_country_by_ip`
- **Action id**: `ipinfo_io.get_country_by_ip`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipinfo_io" --action "get_country_by_ip"
```

## Run

```bash
oo connector run "ipinfo_io" --action "get_country_by_ip" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
