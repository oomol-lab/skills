# Freshdesk · `get_ticket`

Get a single Freshdesk ticket by identifier.

- **Service**: `freshdesk`
- **Action**: `get_ticket`
- **Action id**: `freshdesk.get_ticket`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "freshdesk" --action "get_ticket"
```

## Run

```bash
oo connector run "freshdesk" --action "get_ticket" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
