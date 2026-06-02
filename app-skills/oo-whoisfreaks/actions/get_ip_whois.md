# WhoisFreaks · `get_ip_whois`

Retrieve the IP WHOIS record for one IP address.

- **Service**: `whoisfreaks`
- **Action**: `get_ip_whois`
- **Action id**: `whoisfreaks.get_ip_whois`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "whoisfreaks" --action "get_ip_whois"
```

## Run

```bash
oo connector run "whoisfreaks" --action "get_ip_whois" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
