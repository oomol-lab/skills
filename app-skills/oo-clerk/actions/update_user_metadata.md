# Clerk · `update_user_metadata`

Deep merge metadata for a Clerk user.

- **Service**: `clerk`
- **Action**: `update_user_metadata`
- **Action id**: `clerk.update_user_metadata`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clerk" --action "update_user_metadata"
```

## Run

```bash
oo connector run "clerk" --action "update_user_metadata" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Clerk state. Confirm the exact payload and intended effect with the user before running.
