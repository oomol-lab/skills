# VirusTotal · `get_domain_relationships`

Retrieve related VirusTotal objects for a domain, with an option to request descriptors only.

- **Service**: `virustotal`
- **Action**: `get_domain_relationships`
- **Action id**: `virustotal.get_domain_relationships`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "virustotal" --action "get_domain_relationships"
```

## Run

```bash
oo connector run "virustotal" --action "get_domain_relationships" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
