# NextDNS · `get_profile`

Get one NextDNS profile with its current settings and setup details.

- **Service**: `next_dns`
- **Action**: `get_profile`
- **Action id**: `next_dns.get_profile`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "next_dns" --action "get_profile"
```

## Run

```bash
oo connector run "next_dns" --action "get_profile" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
