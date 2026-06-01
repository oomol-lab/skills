# VirusTotal · `get_metadata`

Retrieve VirusTotal metadata, including available privileges, engines, and relationship names.

- **Service**: `virustotal`
- **Action**: `get_metadata`
- **Action id**: `virustotal.get_metadata`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "virustotal" --action "get_metadata"
```

## Run

```bash
oo connector run "virustotal" --action "get_metadata" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
