# V2EX · `create_token`

Create a new V2EX Personal Access Token from an existing token.

- **Service**: `v2ex`
- **Action**: `create_token`
- **Action id**: `v2ex.create_token`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v2ex" --action "create_token"
```

## Run

```bash
oo connector run "v2ex" --action "create_token" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes V2EX state. Confirm the exact payload and intended effect with the user before running.
