# Cert Spotter · `list_certificate_issuances`

List certificate issuances for one domain from the Cert Spotter CT Search API.

- **Service**: `sslmate_cert_spotter_api`
- **Action**: `list_certificate_issuances`
- **Action id**: `sslmate_cert_spotter_api.list_certificate_issuances`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sslmate_cert_spotter_api" --action "list_certificate_issuances"
```

## Run

```bash
oo connector run "sslmate_cert_spotter_api" --action "list_certificate_issuances" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
