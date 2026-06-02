# Coda · `get_current_user`

Get the current Coda user associated with the authenticated API token.

- **Service**: `coda`
- **Action**: `get_current_user`
- **Action id**: `coda.get_current_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "coda" --action "get_current_user"
```

## Run

```bash
oo connector run "coda" --action "get_current_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
