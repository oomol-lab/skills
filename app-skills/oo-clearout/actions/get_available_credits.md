# Clearout · `get_available_credits`

Get the current Clearout credit balance and daily verification limits.

- **Service**: `clearout`
- **Action**: `get_available_credits`
- **Action id**: `clearout.get_available_credits`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clearout" --action "get_available_credits"
```

## Run

```bash
oo connector run "clearout" --action "get_available_credits" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
