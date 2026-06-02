# IPinfo · `get_ip_info_by_ip`

Retrieve the full legacy IPinfo profile for a specific IP address, including location, ASN, company, privacy, carrier, abuse, and hosted domain data when available.

- **Service**: `ipinfo_io`
- **Action**: `get_ip_info_by_ip`
- **Action id**: `ipinfo_io.get_ip_info_by_ip`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipinfo_io" --action "get_ip_info_by_ip"
```

## Run

```bash
oo connector run "ipinfo_io" --action "get_ip_info_by_ip" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
