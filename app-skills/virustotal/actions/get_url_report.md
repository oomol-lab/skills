# VirusTotal · `get_url_report`

Retrieve the latest VirusTotal report for a URL using either a raw URL or a VirusTotal URL identifier.

- **Service**: `virustotal`
- **Action**: `get_url_report`
- **Action id**: `virustotal.get_url_report`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "virustotal" --action "get_url_report"
```

## Run

```bash
oo connector run "virustotal" --action "get_url_report" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
