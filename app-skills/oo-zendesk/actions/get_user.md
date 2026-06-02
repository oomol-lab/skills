# Zendesk · `get_user`

Get a Zendesk user by identifier.

- **Service**: `zendesk`
- **Action**: `get_user`
- **Action id**: `zendesk.get_user`
- **Required scopes**: zendesk.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zendesk" --action "get_user"
```

## Run

```bash
oo connector run "zendesk" --action "get_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
