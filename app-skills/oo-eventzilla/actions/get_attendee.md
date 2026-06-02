# Eventzilla · `get_attendee`

Get one Eventzilla attendee by attendee identifier.

- **Service**: `eventzilla`
- **Action**: `get_attendee`
- **Action id**: `eventzilla.get_attendee`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "eventzilla" --action "get_attendee"
```

## Run

```bash
oo connector run "eventzilla" --action "get_attendee" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
