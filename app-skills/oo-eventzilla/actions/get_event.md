# Eventzilla · `get_event`

Get one Eventzilla event by its event identifier.

- **Service**: `eventzilla`
- **Action**: `get_event`
- **Action id**: `eventzilla.get_event`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "eventzilla" --action "get_event"
```

## Run

```bash
oo connector run "eventzilla" --action "get_event" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
