# VirusTotal · `get_domain_report`

Retrieve the latest VirusTotal report for a domain.

- **Service**: `virustotal`
- **Action**: `get_domain_report`
- **Action id**: `virustotal.get_domain_report`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "virustotal" --action "get_domain_report"
```

## Run

```bash
oo connector run "virustotal" --action "get_domain_report" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
