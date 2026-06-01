# AbuseIPDB · `get_reports`

List detailed AbuseIPDB reports for a single IP address.

- **Service**: `abuseipdb`
- **Action**: `get_reports`
- **Action id**: `abuseipdb.get_reports`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "abuseipdb" --action "get_reports"
```

## Run

```bash
oo connector run "abuseipdb" --action "get_reports" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
