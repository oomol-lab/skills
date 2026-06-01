# Lemon Squeezy · `retrieve_authenticated_user`

Retrieve the currently authenticated Lemon Squeezy user.

- **Service**: `lemon_squeezy`
- **Action**: `retrieve_authenticated_user`
- **Action id**: `lemon_squeezy.retrieve_authenticated_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "lemon_squeezy" --action "retrieve_authenticated_user"
```

## Run

```bash
oo connector run "lemon_squeezy" --action "retrieve_authenticated_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
