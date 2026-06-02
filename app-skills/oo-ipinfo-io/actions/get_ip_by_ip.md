# IPinfo · `get_ip_by_ip`

Retrieve the requested IP address as plain text through the field filtering endpoint.

- **Service**: `ipinfo_io`
- **Action**: `get_ip_by_ip`
- **Action id**: `ipinfo_io.get_ip_by_ip`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipinfo_io" --action "get_ip_by_ip"
```

## Run

```bash
oo connector run "ipinfo_io" --action "get_ip_by_ip" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
