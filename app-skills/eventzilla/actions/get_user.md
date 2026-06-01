# Eventzilla · `get_user`

Get one Eventzilla organizer or sub-organizer by user identifier.

- **Service**: `eventzilla`
- **Action**: `get_user`
- **Action id**: `eventzilla.get_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "eventzilla" --action "get_user"
```

## Run

```bash
oo connector run "eventzilla" --action "get_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
