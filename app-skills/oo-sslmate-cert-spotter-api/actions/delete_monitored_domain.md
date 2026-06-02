# Cert Spotter · `delete_monitored_domain`

Delete one monitored domain configuration from the connected Cert Spotter account.

- **Service**: `sslmate_cert_spotter_api`
- **Action**: `delete_monitored_domain`
- **Action id**: `sslmate_cert_spotter_api.delete_monitored_domain`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sslmate_cert_spotter_api" --action "delete_monitored_domain"
```

## Run

```bash
oo connector run "sslmate_cert_spotter_api" --action "delete_monitored_domain" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Cert Spotter data. Always confirm the target and get explicit user approval before running.
