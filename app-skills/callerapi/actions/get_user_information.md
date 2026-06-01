# CallerAPI · `get_user_information`

Retrieve the authenticated CallerAPI account email and credit balance.

- **Service**: `callerapi`
- **Action**: `get_user_information`
- **Action id**: `callerapi.get_user_information`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "callerapi" --action "get_user_information"
```

## Run

```bash
oo connector run "callerapi" --action "get_user_information" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
