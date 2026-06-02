# IP2WHOIS · `lookup_hosted_domains`

List hosted domains associated with an IP address.

- **Service**: `ip2whois`
- **Action**: `lookup_hosted_domains`
- **Action id**: `ip2whois.lookup_hosted_domains`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ip2whois" --action "lookup_hosted_domains"
```

## Run

```bash
oo connector run "ip2whois" --action "lookup_hosted_domains" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
