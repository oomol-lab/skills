# Shodan · `reverse_dns_lookup`

Reverse-resolve IP addresses to hostnames with the Shodan DNS reverse endpoint.

- **Service**: `shodan`
- **Action**: `reverse_dns_lookup`
- **Action id**: `shodan.reverse_dns_lookup`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shodan" --action "reverse_dns_lookup"
```

## Run

```bash
oo connector run "shodan" --action "reverse_dns_lookup" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
