# Fireflies · `continue_askfred_thread`

Continue a Fireflies AskFred thread with a follow-up question.

- **Service**: `fireflies`
- **Action**: `continue_askfred_thread`
- **Action id**: `fireflies.continue_askfred_thread`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fireflies" --action "continue_askfred_thread"
```

## Run

```bash
oo connector run "fireflies" --action "continue_askfred_thread" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
