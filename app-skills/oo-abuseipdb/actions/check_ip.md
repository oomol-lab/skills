# AbuseIPDB · `check_ip`

Check the abuse reputation of a single IP address with AbuseIPDB.

- **Service**: `abuseipdb`
- **Action**: `check_ip`
- **Action id**: `abuseipdb.check_ip`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "abuseipdb" --action "check_ip"
```

## Run

```bash
oo connector run "abuseipdb" --action "check_ip" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
