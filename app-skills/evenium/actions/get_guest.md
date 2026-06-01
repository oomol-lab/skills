# Evenium · `get_guest`

Get one Evenium guest by contact ID or guest code for a given event.

- **Service**: `evenium`
- **Action**: `get_guest`
- **Action id**: `evenium.get_guest`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "evenium" --action "get_guest"
```

## Run

```bash
oo connector run "evenium" --action "get_guest" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
