# Mistral AI · `delete_file`

Delete the specified file.

- **Service**: `mistral_ai`
- **Action**: `delete_file`
- **Action id**: `mistral_ai.delete_file`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "delete_file"
```

## Run

```bash
oo connector run "mistral_ai" --action "delete_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Mistral AI data. Always confirm the target and get explicit user approval before running.
