# New Relic · `get_secure_credential`

Get a synthetic secure credential by key using NerdGraph entity search metadata only.

- **Service**: `new_relic`
- **Action**: `get_secure_credential`
- **Action id**: `new_relic.get_secure_credential`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "new_relic" --action "get_secure_credential"
```

## Run

```bash
oo connector run "new_relic" --action "get_secure_credential" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
