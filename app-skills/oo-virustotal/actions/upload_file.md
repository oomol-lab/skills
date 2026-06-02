# VirusTotal · `upload_file`

Upload a file to VirusTotal for analysis, automatically using the large-file upload URL when needed.

- **Service**: `virustotal`
- **Action**: `upload_file`
- **Action id**: `virustotal.upload_file`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "virustotal" --action "upload_file"
```

## Run

```bash
oo connector run "virustotal" --action "upload_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes VirusTotal state. Confirm the exact payload and intended effect with the user before running.
