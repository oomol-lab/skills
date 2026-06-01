# WhoisFreaks · `get_asn_whois`

Retrieve the ASN WHOIS record for one autonomous system number.

- **Service**: `whoisfreaks`
- **Action**: `get_asn_whois`
- **Action id**: `whoisfreaks.get_asn_whois`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "whoisfreaks" --action "get_asn_whois"
```

## Run

```bash
oo connector run "whoisfreaks" --action "get_asn_whois" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
