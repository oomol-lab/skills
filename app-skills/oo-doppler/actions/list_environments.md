# Doppler · `list_environments`

List environments under a Doppler project.

- **Service**: `doppler`
- **Action**: `list_environments`
- **Action id**: `doppler.list_environments`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "list_environments"
```

## Run

```bash
oo connector run "doppler" --action "list_environments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
