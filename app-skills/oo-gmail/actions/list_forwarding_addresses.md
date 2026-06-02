# Gmail · `list_forwarding_addresses`

List the forwarding addresses that are registered on the Gmail account.

- **Service**: `gmail`
- **Action**: `list_forwarding_addresses`
- **Action id**: `gmail.list_forwarding_addresses`
- **Required scopes**: gmail.settings

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "list_forwarding_addresses"
```

## Run

```bash
oo connector run "gmail" --action "list_forwarding_addresses" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
