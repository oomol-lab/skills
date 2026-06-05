# Clerk · `create_user`

Create a Clerk user.

- **Service**: `clerk`
- **Action**: `create_user`
- **Action id**: `clerk.create_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clerk" --action "create_user"
```

## Run

```bash
oo connector run "clerk" --action "create_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Clerk state. Confirm the exact payload and intended effect with the user before running.
