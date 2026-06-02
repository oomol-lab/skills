# Fireflies · `get_bite`

Get a Fireflies bite by bite ID.

- **Service**: `fireflies`
- **Action**: `get_bite`
- **Action id**: `fireflies.get_bite`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fireflies" --action "get_bite"
```

## Run

```bash
oo connector run "fireflies" --action "get_bite" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
