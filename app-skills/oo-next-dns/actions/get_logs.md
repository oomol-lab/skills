# NextDNS · `get_logs`

List DNS query logs for a NextDNS profile with optional filters.

- **Service**: `next_dns`
- **Action**: `get_logs`
- **Action id**: `next_dns.get_logs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "next_dns" --action "get_logs"
```

## Run

```bash
oo connector run "next_dns" --action "get_logs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
