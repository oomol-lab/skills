# Clerk · `update_user`

Update a Clerk user.

- **Service**: `clerk`
- **Action**: `update_user`
- **Action id**: `clerk.update_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clerk" --action "update_user"
```

## Run

```bash
oo connector run "clerk" --action "update_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Clerk state. Confirm the exact payload and intended effect with the user before running.
