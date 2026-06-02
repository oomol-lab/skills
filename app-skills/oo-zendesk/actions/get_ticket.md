# Zendesk · `get_ticket`

Get a Zendesk ticket and its comments by identifier.

- **Service**: `zendesk`
- **Action**: `get_ticket`
- **Action id**: `zendesk.get_ticket`
- **Required scopes**: zendesk.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zendesk" --action "get_ticket"
```

## Run

```bash
oo connector run "zendesk" --action "get_ticket" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
