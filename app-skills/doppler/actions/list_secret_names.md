# Doppler · `list_secret_names`

List only the secret names for a Doppler project and config.

- **Service**: `doppler`
- **Action**: `list_secret_names`
- **Action id**: `doppler.list_secret_names`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "list_secret_names"
```

## Run

```bash
oo connector run "doppler" --action "list_secret_names" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
