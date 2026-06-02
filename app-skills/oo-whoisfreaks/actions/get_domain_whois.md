# WhoisFreaks · `get_domain_whois`

Retrieve the live WHOIS record for one domain.

- **Service**: `whoisfreaks`
- **Action**: `get_domain_whois`
- **Action id**: `whoisfreaks.get_domain_whois`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "whoisfreaks" --action "get_domain_whois"
```

## Run

```bash
oo connector run "whoisfreaks" --action "get_domain_whois" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
