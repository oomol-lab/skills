# Cert Spotter · `upsert_monitored_domain`

Create or update one monitored domain configuration in the connected Cert Spotter account.

- **Service**: `sslmate_cert_spotter_api`
- **Action**: `upsert_monitored_domain`
- **Action id**: `sslmate_cert_spotter_api.upsert_monitored_domain`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sslmate_cert_spotter_api" --action "upsert_monitored_domain"
```

## Run

```bash
oo connector run "sslmate_cert_spotter_api" --action "upsert_monitored_domain" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Cert Spotter state. Confirm the exact payload and intended effect with the user before running.
