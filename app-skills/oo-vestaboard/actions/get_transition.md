# Vestaboard · `get_transition`

Read the current Vestaboard transition settings.

- **Service**: `vestaboard`
- **Action**: `get_transition`
- **Action id**: `vestaboard.get_transition`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vestaboard" --action "get_transition"
```

## Run

```bash
oo connector run "vestaboard" --action "get_transition" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
