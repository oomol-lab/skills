# VirusTotal · `get_analysis`

Retrieve a VirusTotal analysis object by analysis ID.

- **Service**: `virustotal`
- **Action**: `get_analysis`
- **Action id**: `virustotal.get_analysis`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "virustotal" --action "get_analysis"
```

## Run

```bash
oo connector run "virustotal" --action "get_analysis" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
