# Breeze · `get_person`

Get one Breeze person by Breeze person ID.

- **Service**: `breeze`
- **Action**: `get_person`
- **Action id**: `breeze.get_person`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "breeze" --action "get_person"
```

## Run

```bash
oo connector run "breeze" --action "get_person" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
