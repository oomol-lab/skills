# Doppler · `list_configs`

List configs under a specific Doppler project.

- **Service**: `doppler`
- **Action**: `list_configs`
- **Action id**: `doppler.list_configs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "list_configs"
```

## Run

```bash
oo connector run "doppler" --action "list_configs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
