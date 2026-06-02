# Attio · `identify`

Identify the current Attio access token, its workspace, and the scopes attached to it.

- **Service**: `attio`
- **Action**: `identify`
- **Action id**: `attio.identify`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "attio" --action "identify"
```

## Run

```bash
oo connector run "attio" --action "identify" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
