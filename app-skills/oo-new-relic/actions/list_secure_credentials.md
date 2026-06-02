# New Relic · `list_secure_credentials`

List synthetic secure credentials by using NerdGraph entity search over the SYNTH SECURE_CRED entity type.

- **Service**: `new_relic`
- **Action**: `list_secure_credentials`
- **Action id**: `new_relic.list_secure_credentials`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "new_relic" --action "list_secure_credentials"
```

## Run

```bash
oo connector run "new_relic" --action "list_secure_credentials" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
