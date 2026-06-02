# IPQualityScore · `check_ip_reputation`

Check an IP address for proxy, VPN, Tor, bot, and abuse risk signals.

- **Service**: `ipqualityscore`
- **Action**: `check_ip_reputation`
- **Action id**: `ipqualityscore.check_ip_reputation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipqualityscore" --action "check_ip_reputation"
```

## Run

```bash
oo connector run "ipqualityscore" --action "check_ip_reputation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
