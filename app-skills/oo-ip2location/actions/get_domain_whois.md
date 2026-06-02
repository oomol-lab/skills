# IP2Location.io · `get_domain_whois`

Retrieve WHOIS registration details for one domain.

- **Service**: `ip2location`
- **Action**: `get_domain_whois`
- **Action id**: `ip2location.get_domain_whois`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ip2location" --action "get_domain_whois"
```

## Run

```bash
oo connector run "ip2location" --action "get_domain_whois" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
