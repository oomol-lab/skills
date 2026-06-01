# VirusTotal · `scan_url`

Submit a URL to VirusTotal for analysis.

- **Service**: `virustotal`
- **Action**: `scan_url`
- **Action id**: `virustotal.scan_url`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "virustotal" --action "scan_url"
```

## Run

```bash
oo connector run "virustotal" --action "scan_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
