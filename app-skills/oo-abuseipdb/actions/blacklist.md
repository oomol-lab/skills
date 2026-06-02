# AbuseIPDB · `blacklist`

Read the structured AbuseIPDB blacklist feed in JSON format.

- **Service**: `abuseipdb`
- **Action**: `blacklist`
- **Action id**: `abuseipdb.blacklist`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "abuseipdb" --action "blacklist"
```

## Run

```bash
oo connector run "abuseipdb" --action "blacklist" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
