# folk · `get_person`

Get one Folk person by person ID.

- **Service**: `folk`
- **Action**: `get_person`
- **Action id**: `folk.get_person`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "folk" --action "get_person"
```

## Run

```bash
oo connector run "folk" --action "get_person" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
