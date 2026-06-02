# Zendesk · `get_organization`

Get a Zendesk organization by identifier.

- **Service**: `zendesk`
- **Action**: `get_organization`
- **Action id**: `zendesk.get_organization`
- **Required scopes**: zendesk.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zendesk" --action "get_organization"
```

## Run

```bash
oo connector run "zendesk" --action "get_organization" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
