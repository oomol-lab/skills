# NextDNS · `get_analytics_status`

List DNS query counts grouped by status for a NextDNS profile.

- **Service**: `next_dns`
- **Action**: `get_analytics_status`
- **Action id**: `next_dns.get_analytics_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "next_dns" --action "get_analytics_status"
```

## Run

```bash
oo connector run "next_dns" --action "get_analytics_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
