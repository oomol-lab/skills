# Headout · `get_booking`

Get one booking by its Headout booking id.

- **Service**: `headout`
- **Action**: `get_booking`
- **Action id**: `headout.get_booking`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "headout" --action "get_booking"
```

## Run

```bash
oo connector run "headout" --action "get_booking" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
