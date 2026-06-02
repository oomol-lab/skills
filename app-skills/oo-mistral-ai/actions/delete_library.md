# Mistral AI · `delete_library`

Delete the specified library.

- **Service**: `mistral_ai`
- **Action**: `delete_library`
- **Action id**: `mistral_ai.delete_library`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "delete_library"
```

## Run

```bash
oo connector run "mistral_ai" --action "delete_library" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Mistral AI data. Always confirm the target and get explicit user approval before running.
