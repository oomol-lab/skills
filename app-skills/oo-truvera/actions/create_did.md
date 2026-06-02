# Truvera · `create_did`

Create a new Truvera DID and return the background job handle for polling blockchain completion.

- **Service**: `truvera`
- **Action**: `create_did`
- **Action id**: `truvera.create_did`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "truvera" --action "create_did"
```

## Run

```bash
oo connector run "truvera" --action "create_did" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Truvera state. Confirm the exact payload and intended effect with the user before running.
