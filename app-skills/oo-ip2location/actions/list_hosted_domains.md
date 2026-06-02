# IP2Location.io · `list_hosted_domains`

List the hosted domains associated with one IPv4 or IPv6 address.

- **Service**: `ip2location`
- **Action**: `list_hosted_domains`
- **Action id**: `ip2location.list_hosted_domains`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ip2location" --action "list_hosted_domains"
```

## Run

```bash
oo connector run "ip2location" --action "list_hosted_domains" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
