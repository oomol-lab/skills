# VirusTotal · `rescan_file`

Request a fresh VirusTotal analysis for a previously submitted file.

- **Service**: `virustotal`
- **Action**: `rescan_file`
- **Action id**: `virustotal.rescan_file`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "virustotal" --action "rescan_file"
```

## Run

```bash
oo connector run "virustotal" --action "rescan_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
