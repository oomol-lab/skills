# IPinfo · `map_ips`

Upload up to 500,000 IP addresses to the IPinfo map tool and return the generated report URL.

- **Service**: `ipinfo_io`
- **Action**: `map_ips`
- **Action id**: `ipinfo_io.map_ips`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipinfo_io" --action "map_ips"
```

## Run

```bash
oo connector run "ipinfo_io" --action "map_ips" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
