# Quo · `delete_contact`

Delete a contact from the connected Quo workspace.

- **Service**: `quo`
- **Action**: `delete_contact`
- **Action id**: `quo.delete_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "quo" --action "delete_contact"
```

## Run

```bash
oo connector run "quo" --action "delete_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Quo data. Always confirm the target and get explicit user approval before running.
