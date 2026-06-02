# VirusTotal · `search`

Search files, URLs, domains, IPs, and other objects in VirusTotal.

- **Service**: `virustotal`
- **Action**: `search`
- **Action id**: `virustotal.search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "virustotal" --action "search"
```

## Run

```bash
oo connector run "virustotal" --action "search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
