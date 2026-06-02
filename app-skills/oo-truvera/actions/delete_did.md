# Truvera · `delete_did`

Delete a Truvera DID and return the background job handle for polling blockchain completion.

- **Service**: `truvera`
- **Action**: `delete_did`
- **Action id**: `truvera.delete_did`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "truvera" --action "delete_did"
```

## Run

```bash
oo connector run "truvera" --action "delete_did" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Truvera data. Always confirm the target and get explicit user approval before running.
