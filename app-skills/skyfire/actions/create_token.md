# Skyfire · `create_token`

Create a buyer token in Skyfire for one seller service or seller domain, including funded pay and identity-carrying KYA variants.

- **Service**: `skyfire`
- **Action**: `create_token`
- **Action id**: `skyfire.create_token`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "skyfire" --action "create_token"
```

## Run

```bash
oo connector run "skyfire" --action "create_token" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Skyfire state. Confirm the exact payload and intended effect with the user before running.
