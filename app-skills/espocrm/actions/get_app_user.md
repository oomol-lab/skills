# EspoCRM · `get_app_user`

Get the current EspoCRM user data for the configured connection, including ACL and preferences when returned.

- **Service**: `espocrm`
- **Action**: `get_app_user`
- **Action id**: `espocrm.get_app_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "espocrm" --action "get_app_user"
```

## Run

```bash
oo connector run "espocrm" --action "get_app_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
