# Fireflies · `get_askfred_thread`

Get a Fireflies AskFred thread by thread ID.

- **Service**: `fireflies`
- **Action**: `get_askfred_thread`
- **Action id**: `fireflies.get_askfred_thread`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fireflies" --action "get_askfred_thread"
```

## Run

```bash
oo connector run "fireflies" --action "get_askfred_thread" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
