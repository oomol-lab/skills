# VirusTotal · `get_votes`

Retrieve community votes for a file, URL, domain, or IP address in VirusTotal.

- **Service**: `virustotal`
- **Action**: `get_votes`
- **Action id**: `virustotal.get_votes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "virustotal" --action "get_votes"
```

## Run

```bash
oo connector run "virustotal" --action "get_votes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
