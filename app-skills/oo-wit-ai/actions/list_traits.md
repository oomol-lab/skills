# Wit.ai · `list_traits`

List all traits defined in the current Wit.ai app.

- **Service**: `wit_ai`
- **Action**: `list_traits`
- **Action id**: `wit_ai.list_traits`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "wit_ai" --action "list_traits"
```

## Run

```bash
oo connector run "wit_ai" --action "list_traits" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
