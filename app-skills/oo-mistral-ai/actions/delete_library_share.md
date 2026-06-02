# Mistral AI · `delete_library_share`

Removes the shared access level for the specified library.

- **Service**: `mistral_ai`
- **Action**: `delete_library_share`
- **Action id**: `mistral_ai.delete_library_share`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "delete_library_share"
```

## Run

```bash
oo connector run "mistral_ai" --action "delete_library_share" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Mistral AI data. Always confirm the target and get explicit user approval before running.
