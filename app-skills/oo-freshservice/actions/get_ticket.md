# Freshservice · `get_ticket`

Get one Freshservice ticket by identifier with optional include expansions.

- **Service**: `freshservice`
- **Action**: `get_ticket`
- **Action id**: `freshservice.get_ticket`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "freshservice" --action "get_ticket"
```

## Run

```bash
oo connector run "freshservice" --action "get_ticket" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
