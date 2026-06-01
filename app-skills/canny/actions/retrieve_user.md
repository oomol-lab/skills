# Canny · `retrieve_user`

Retrieve a single Canny user by id, userID, or email.

- **Service**: `canny`
- **Action**: `retrieve_user`
- **Action id**: `canny.retrieve_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "canny" --action "retrieve_user"
```

## Run

```bash
oo connector run "canny" --action "retrieve_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
