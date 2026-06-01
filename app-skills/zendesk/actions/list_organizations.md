# Zendesk · `list_organizations`

List Zendesk organizations with pagination.

- **Service**: `zendesk`
- **Action**: `list_organizations`
- **Action id**: `zendesk.list_organizations`
- **Required scopes**: zendesk.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zendesk" --action "list_organizations"
```

## Run

```bash
oo connector run "zendesk" --action "list_organizations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
