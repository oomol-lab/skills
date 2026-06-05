# Loops · `delete_contact`

Delete a Loops contact by email or userId.

- **Service**: `loops`
- **Action**: `delete_contact`
- **Action id**: `loops.delete_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "loops" --action "delete_contact"
```

## Run

```bash
oo connector run "loops" --action "delete_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Loops data. Always confirm the target and get explicit user approval before running.
