# Interzoid · `get_remaining_credits`

Return the remaining credits for the connected Interzoid API license key.

- **Service**: `interzoid`
- **Action**: `get_remaining_credits`
- **Action id**: `interzoid.get_remaining_credits`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "interzoid" --action "get_remaining_credits"
```

## Run

```bash
oo connector run "interzoid" --action "get_remaining_credits" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
