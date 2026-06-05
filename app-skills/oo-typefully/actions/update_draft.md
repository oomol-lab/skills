# Typefully · `update_draft`

Update a Typefully draft by ID.

- **Service**: `typefully`
- **Action**: `update_draft`
- **Action id**: `typefully.update_draft`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "typefully" --action "update_draft"
```

## Run

```bash
oo connector run "typefully" --action "update_draft" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Typefully state. Confirm the exact payload and intended effect with the user before running.
