# VirusTotal · `get_ip_address_report`

Retrieve the latest VirusTotal report for an IP address.

- **Service**: `virustotal`
- **Action**: `get_ip_address_report`
- **Action id**: `virustotal.get_ip_address_report`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "virustotal" --action "get_ip_address_report"
```

## Run

```bash
oo connector run "virustotal" --action "get_ip_address_report" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
