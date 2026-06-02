# Doppler · `download_secrets`

Export secrets from a Doppler config in a specific format.

- **Service**: `doppler`
- **Action**: `download_secrets`
- **Action id**: `doppler.download_secrets`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "download_secrets"
```

## Run

```bash
oo connector run "doppler" --action "download_secrets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
