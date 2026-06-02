# Enigma · `get_list_materialization`

Retrieve an Enigma list materialization by ID, including progress, generated resource URI, metrics, and billing details.

- **Service**: `enigma`
- **Action**: `get_list_materialization`
- **Action id**: `enigma.get_list_materialization`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "enigma" --action "get_list_materialization"
```

## Run

```bash
oo connector run "enigma" --action "get_list_materialization" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
