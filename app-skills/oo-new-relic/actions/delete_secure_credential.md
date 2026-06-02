# New Relic · `delete_secure_credential`

Delete a New Relic synthetic secure credential using NerdGraph.

- **Service**: `new_relic`
- **Action**: `delete_secure_credential`
- **Action id**: `new_relic.delete_secure_credential`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "new_relic" --action "delete_secure_credential"
```

## Run

```bash
oo connector run "new_relic" --action "delete_secure_credential" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites New Relic data. Always confirm the target and get explicit user approval before running.
