# Cert Spotter · `list_monitored_domains`

List monitored domains configured in the connected Cert Spotter account.

- **Service**: `sslmate_cert_spotter_api`
- **Action**: `list_monitored_domains`
- **Action id**: `sslmate_cert_spotter_api.list_monitored_domains`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sslmate_cert_spotter_api" --action "list_monitored_domains"
```

## Run

```bash
oo connector run "sslmate_cert_spotter_api" --action "list_monitored_domains" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
