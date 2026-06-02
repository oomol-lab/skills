# IP2WHOIS · `lookup_domain`

Look up WHOIS registration details for a domain.

- **Service**: `ip2whois`
- **Action**: `lookup_domain`
- **Action id**: `ip2whois.lookup_domain`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ip2whois" --action "lookup_domain"
```

## Run

```bash
oo connector run "ip2whois" --action "lookup_domain" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
