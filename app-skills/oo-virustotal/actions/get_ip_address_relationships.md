# VirusTotal · `get_ip_address_relationships`

Retrieve related VirusTotal objects for an IP address, with an option to request descriptors only.

- **Service**: `virustotal`
- **Action**: `get_ip_address_relationships`
- **Action id**: `virustotal.get_ip_address_relationships`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "virustotal" --action "get_ip_address_relationships"
```

## Run

```bash
oo connector run "virustotal" --action "get_ip_address_relationships" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
