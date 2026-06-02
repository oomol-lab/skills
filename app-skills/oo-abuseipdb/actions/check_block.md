# AbuseIPDB · `check_block`

Inspect a CIDR block for reported addresses with AbuseIPDB.

- **Service**: `abuseipdb`
- **Action**: `check_block`
- **Action id**: `abuseipdb.check_block`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "abuseipdb" --action "check_block"
```

## Run

```bash
oo connector run "abuseipdb" --action "check_block" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
