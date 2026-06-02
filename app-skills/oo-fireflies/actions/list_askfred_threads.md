# Fireflies · `list_askfred_threads`

List Fireflies AskFred conversation threads.

- **Service**: `fireflies`
- **Action**: `list_askfred_threads`
- **Action id**: `fireflies.list_askfred_threads`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fireflies" --action "list_askfred_threads"
```

## Run

```bash
oo connector run "fireflies" --action "list_askfred_threads" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
