# Mistral AI · `create_library_share`

Creates or updates the shared access level for the specified library.

- **Service**: `mistral_ai`
- **Action**: `create_library_share`
- **Action id**: `mistral_ai.create_library_share`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "create_library_share"
```

## Run

```bash
oo connector run "mistral_ai" --action "create_library_share" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mistral AI state. Confirm the exact payload and intended effect with the user before running.
