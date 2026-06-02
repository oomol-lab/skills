# New Relic · `update_secure_credential`

Update a New Relic synthetic secure credential value or description using NerdGraph.

- **Service**: `new_relic`
- **Action**: `update_secure_credential`
- **Action id**: `new_relic.update_secure_credential`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "new_relic" --action "update_secure_credential"
```

## Run

```bash
oo connector run "new_relic" --action "update_secure_credential" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes New Relic state. Confirm the exact payload and intended effect with the user before running.
