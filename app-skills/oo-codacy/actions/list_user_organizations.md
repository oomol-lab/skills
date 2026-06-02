# Codacy · `list_user_organizations`

List Codacy organizations accessible to the connected API token, optionally scoped to one Git provider.

- **Service**: `codacy`
- **Action**: `list_user_organizations`
- **Action id**: `codacy.list_user_organizations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "codacy" --action "list_user_organizations"
```

## Run

```bash
oo connector run "codacy" --action "list_user_organizations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
