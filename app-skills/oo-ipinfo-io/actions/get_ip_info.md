# IPinfo · `get_ip_info`

Retrieve Lite IP information for a specific IP address or for the caller's current IP when no IP is provided.

- **Service**: `ipinfo_io`
- **Action**: `get_ip_info`
- **Action id**: `ipinfo_io.get_ip_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipinfo_io" --action "get_ip_info"
```

## Run

```bash
oo connector run "ipinfo_io" --action "get_ip_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
