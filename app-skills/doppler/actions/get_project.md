# Doppler · `get_project`

Get the details of a single Doppler project.

- **Service**: `doppler`
- **Action**: `get_project`
- **Action id**: `doppler.get_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "get_project"
```

## Run

```bash
oo connector run "doppler" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
