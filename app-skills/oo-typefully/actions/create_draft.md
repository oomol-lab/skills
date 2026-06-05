# Typefully · `create_draft`

Create a Typefully draft for a social set.

- **Service**: `typefully`
- **Action**: `create_draft`
- **Action id**: `typefully.create_draft`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "typefully" --action "create_draft"
```

## Run

```bash
oo connector run "typefully" --action "create_draft" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Typefully state. Confirm the exact payload and intended effect with the user before running.
