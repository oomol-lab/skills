# IPinfo · `get_current_ip_info`

Retrieve the full legacy IPinfo profile for the caller's current IP address, including location, ASN, company, privacy, carrier, abuse, and hosted domain data when available.

- **Service**: `ipinfo_io`
- **Action**: `get_current_ip_info`
- **Action id**: `ipinfo_io.get_current_ip_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipinfo_io" --action "get_current_ip_info"
```

## Run

```bash
oo connector run "ipinfo_io" --action "get_current_ip_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
